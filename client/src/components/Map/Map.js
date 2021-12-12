import React,{useState,useEffect} from "react";
import { DirectionsRenderer,DirectionsService, GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import Input from '../Input/Input';
import axios from 'axios';
import jsPDF from 'jspdf';
import './Map.css';
import RecordTable from "./RecordTable";


export default function Map({ type }){
	const [medicineName, setmedicineName] = useState("");
	const [data, setdata] = useState({
		center: {lat: 37.772,lng: -122.214},
	});
	const [selectedLocation, setselectedLocation] = useState();
	const [origin, setorigin] = useState({
		lat:10,
		lng:10
	});
	const [destinations, setdestinations] = useState([]);
	const [medicalStores, setmedicalStores] = useState([]);
	const [directionResponse,setResponse] = useState(null);
	const [showDirections, setshowDirections] = useState(true);
	const containerStyle ={
		width: '100%',
	  	height: '100%',
		marginLeft: '-1%'
	};
	const options = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0
	  };
  
	const success = (position) => {
		setdata({
			center:{
				lat:position.coords.latitude,
				lng:position.coords.longitude
			}
		});
		setorigin({
			lat:position.coords.latitude,
			lng:position.coords.longitude
		});
	};
	  const error=(err)=> {
		console.warn(`ERROR(${err.code}): ${err.message}`);
	}
	useEffect(() => {
		console.log(origin);
	}, [origin]);
	useEffect(() => {
		console.log(directionResponse);
		setshowDirections(true);
	}, [directionResponse]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, options);
	// eslint-disable-next-line
  },[]);
  const onSubmitHandler=()=>{
	  setmedicalStores([]);
	  //console.log("submit");
	  let APIdata = {};
	  if(type === "medicine"){
		APIdata = {
		lat:data.center.lat,
		lng:data.center.lng,
		medicine: medicineName
		  }	
	}
	else{
		APIdata = {
		lat:data.center.lat,
		lng:data.center.lng,
		bloodGroup: medicineName
		}	
	}
	
	///set Data VIA API
	const url = type==="donor" ? "https://medimpact.herokuapp.com/donor/nearestDonors" : "https://medimpact.herokuapp.com/store/nearestStores";
	axios.post(url, APIdata)
	.then(response=>{
		setmedicalStores(response.data);
	})
	.catch(error=>{console.log(error)});
	// Set Data From blockchain
	// 
	// 
	// 
	// 	
}
const handleMedicineChange=(e)=>{
    setmedicineName(e.target.value);
}

useEffect(() => {
    medicalStores?.forEach((store) =>{
		let loc={
			lat:store.lat,
			lng:store.lng
		}
		setdestinations( (destinations) => [...destinations,loc]);
	}
	 );
}, [medicalStores]);

console.log(medicalStores)


const showDirection = (location) => {
	setselectedLocation(location);
	setResponse(null);
}
let test = {lat:Number(25.344930),lng:Number(74.631260)};

    return (
		<div className="map-Search-container">
			<div className="row">
				<div className="col-sm-6">
					<div className="map-container">
						
							<LoadScript
							googleMapsApiKey="AIzaSyBZWUmH4zYtWSPyFCRuvJxHLxsJj407-78"
							>
								<GoogleMap
									mapContainerStyle={containerStyle}
									center={data.center}
									zoom={13}
									onClick={()=>{setshowDirections(false);setselectedLocation(null);console.log(data);}}
								>
									<Marker position={data.center}/>
									{medicalStores&&destinations.map((pos,index)=>
										<Marker key={index} onClick={()=>showDirection(pos)}  position={pos}/>
									)}
									{directionResponse===null &&  showDirections && <DirectionsService options={{origin: origin,
													destination: selectedLocation,
													travelMode: 'DRIVING'}}
											callback={(response)=>{
												console.log(response,`response`,`state`);
												setshowDirections(true);
												if (response !== null) {
												if (response.status === 'OK') {
													setResponse(response);
												} else {
													console.log('response: ', response)
													}
												}
											}}/>}
									{directionResponse!==null&& showDirections&&
								<DirectionsRenderer options={{directions:directionResponse}}/>}
								</GoogleMap>
						</LoadScript>
						
					</div>
				</div>
				<div className="col-sm-6">
					<div className="map-Search-input">
					<Input 
						type="text" 
						className="map-input"
						placeholder={type==="medicine" ? "Enter Medicine Name":"Enter Blood Type"} 
						onChange={handleMedicineChange} 
						style={{
							width:"120%",
							height:"40px",
							marginRight:"40px",
							marginLeft:"-20px",
							marginTop:"100px",
							marginBottom:"30px",
							fontFamily: "Source Sans Pro",
					}} />
					<button className="btn btn-primary col-2 submit-btn" onClick={onSubmitHandler}>Submit</button>
					</div>
					<RecordTable data={medicalStores} type={type}/>
				</div>
			</div>
		</div>
        
    );
} 
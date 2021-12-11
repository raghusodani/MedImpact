import React,{useState,useEffect} from "react";
import { DirectionsRenderer,DirectionsService, GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import Input from '../Input/Input';
import axios from 'axios';
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
		width: '900px',
	  	height: '600px'	
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
	const APIdata = {
		medicine: medicineName,
		latitude:data.center.lat,
		longitude:data.center.lng	
	};
	console.log(APIdata);	
	///set Data VIA API
	// const url = type==="Donor" ? "https://medimpact.herokuapp.com/api/donorlist/" : "https://medimpact.herokuapp.com/api/medicalStores";
	const url = "https://frontida.herokuapp.com/users/medicine_search/"
	axios.post(url, APIdata)
	.then(response=>{
		setmedicalStores(response.data);
	})
	.catch(error=>{console.log(error)});
	///Set Data From blockchain
	// 
	// 
	// 
	// 	
}
const handleMedicineChange=(e)=>{
    setmedicineName(e.target.value);
}

useEffect(() => {
	// eslint-disable-next-line
	console.log(medicalStores);
	// eslint-disable-next-line
	let Markers = medicalStores&& medicalStores.map((store) =>{
		const loc={lat:Number(store.point.split(/\(([^)]+)\)/)[1].split(" ")[1]),
					  lng:Number(store.point.split(/\(([^)]+)\)/)[1].split(" ")[0])};
					  console.log(loc);
		setdestinations([...destinations,{
			lat:loc.lat,
			lng:loc.lng
		}]);
	}
	 );
	 // eslint-disable-next-line
}, [medicalStores]);
const showDirection = (location) => {
	setselectedLocation(location);
	setResponse(null);
}
let test = {lat:Number(25.344930),lng:Number(74.631260)};

    return (
		<div>
			<div>
				<Input type="text" placeholder={type==="medicine" ? "Enter Medicine Name":"Enter Blood Type"} onChange={handleMedicineChange}  />
				<button className="btn btn-primary col-2" onClick={onSubmitHandler}>Submit</button>
			</div>
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
					{/* <Marker onClick={()=>showDirection(test)} position={test}/> */}
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
        
    );
} 
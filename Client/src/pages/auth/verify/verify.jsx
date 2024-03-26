import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import success from "../../../assets/images/success.png";
import styles from "./verify.module.css";
import { useNavigate } from "react-router-dom";
const EmailVerify = () => {
	const [validUrl, setValidUrl] = useState(true);
	const param = useParams();
	let navigate = useNavigate();
	useEffect(() => {
		const verifyEmailUrl = async () => {
			try {
				const url = `https://cnpmapi.azurewebsites.net/users/verify/${param.token}`;
				let { data } = await axios.get(url);
				console.log(data);
				setValidUrl(true);
			} catch (error) {
				console.log(error);
				setValidUrl(false);
			}
		};
		verifyEmailUrl();
	}, [param]);
	function multitask(){
		navigate("/login");
		window.location.reload(false);
	}
	return (
		<>
			{validUrl ? (
				<div className={styles.container}>
					<img src={success} alt="success_img" className={styles.success_img} />
					<h1>Email verified successfully</h1>
					
						<button className={styles.green_btn} onClick={()=>multitask()}>Login</button>
					
				</div>
			) : (
				<h1>404 Not Found</h1>
			)}
		</>
	);
};

export default EmailVerify;

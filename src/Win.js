import {useEffect, useState} from 'react';

const Win = ({user,name,title,iconurl,winDisp,statusBarCls,appDisp,children,width,height}) => {

	const [windowDisplay,setWindowDisplay] = useState(winDisp);
	const [statusbarClass,setStatusClass] = useState(statusBarCls);
	const [appDisplay,setAppDisplay] = useState(appDisp);
	const [time, setTime] = useState([]);

	const style = `
	.active{
		display: ${appDisplay};
		padding: 2px;
		width: 200px;
		text-align:center;
		box-shadow: inset 1px 1px 2px 0px rgba(0, 0, 0, 0.4); 
		border-right: 1px #ffffff solid;
		border-bottom: 1px #ffffff solid;
		background-color: #dfdfdf;
		margin-bottom: 5px;
		margin-right: 3px;
	}

	.minimized{
		display: ${appDisplay};
		padding: 2px;
		width: 200px;
		text-align:center;
		box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.4); 
		border-left: 1px #ffffff solid;
		border-top: 1px #ffffff solid;
		background-color: #dfdfdf;
		margin-bottom: 5px;
		margin-right: 3px;
	}

	.box{
		padding: 0px;
		border-radius: 0px;
		border: 1px #a9a9a9 solid;
		color: #000000;
		background-color: #DFDEDC;
		width: ${width};
		height: ${height};
	}

	.box1{
		display: ${windowDisplay};
	}
	`;

	useEffect(() => {
    		setInterval(() => {
      			let d = new Date();
      			let hour = d.getHours().toString().padStart(2, '0');
      			let minute = d.getMinutes().toString().padStart(2, '0');
		        setTime(hour + ':' + minute);
    		}, 1000);
  	}, []);

	return(
	    <div className="main">
	      <style>
			{style}
	      </style>
	      <div className="desk">
		      <div className="deskIco" onClick={ ()=>{ 
					if(appDisplay==="none"){
						setAppDisplay("inline-block");
						setWindowDisplay("block");
						setStatusClass("active");
					}
				}
		      }>
			<img src={iconurl} style={{height:"60px"}} alt="" /><br/>
			{name}
		      </div>
		      <br />
		      <br />
	      </div>
	      <div className="container">
		<div className="box box1">
			<div className="titleBar" >
				<div className="titleImg">
					<img src={iconurl} style={{height:"22px"}} alt="" />
				</div>
				<div className="titleText">
					<b className="title is-5 has-text-white">
						{title}
					</b>
				</div>
				<div className="batsu" onClick={() => {
					setAppDisplay("none");
					setWindowDisplay("none");
				}}>
				</div>
			</div>
			<div className="contents">
				{children}
			</div>
		</div>
	      </div>
	      <div className="statusbar">
		<div>
			<div className={statusbarClass} onClick={ ()=>{ 
					if(windowDisplay==="block"){
						setWindowDisplay("none");
						setStatusClass("minimized");
					}else{
						setWindowDisplay("block");
						setStatusClass("active");
					}
				}
			}>
				{title}
			</div>
		</div>
		<div>
			<div className="clock">
				{time}
			</div>
		</div>
	      </div>
	    </div>
	)

}

export default Win;

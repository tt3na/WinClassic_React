import {useEffect, useState} from 'react';

const Win = ({user,name,title,iconurl,winDisp,statusBarCls,appDisp,children,width,height}) => {

	const [windowDisplay,setWindowDisplay] = useState(winDisp);
	const [statusbarClass,setStatusClass] = useState(statusBarCls);
	const [appDisplay,setAppDisplay] = useState(appDisp);
	const [time, setTime] = useState([]);

	const style = `
	html{
		background-color: #3B6EA5;
	}

	.container{
		margin-top: 5vh;
	}

	.titleBar{
		background-image:var(--nav-img);
		height:36px;
		padding-left:10px;
		margin-bottom:0px;
		border-radius: 0px;
		display: grid;
		grid-template-columns: 30px 1fr 25px;  
	}

	.titleImg{
		grid-column: 1/1;
		vertical-align: middle;
		margin-top: 7px;
	}

	.titleText{
		grid-column: 2/2;
		margin-top: 6px;
	}

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

	.clock{
		display: inline-block;
		padding: 2px;
		width: 60px;
		text-align:center;
		box-shadow: inset 1px 1px 2px 0px rgba(0, 0, 0, 0.4); 
		border-right: 1px #ffffff solid;
		border-bottom: 1px #ffffff solid;
		background-color: #dfdfdf;
		margin-bottom: 5px;
		margin-right: 3px;
		vertical-align: bottom;
	}

	.desk{
		color: #ffffff;
		position: absolute;
		left: 2%;
		font-size: 12px;
		text-align: center;
	}

	.deskIco{
		width: 90px;
	}

	.statusbar{
		display: flex;
		justify-content: space-between;
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 39px;
		background-color: #DFDEDC;
		color: #000000;
		border-top: 1px #ffffff solid;
		padding-left: 10px;
		padding-top:5px;
	}

	.batsu {
		grid-column: 3/3;
		position: relative;
		margin-top: 8px;
		width: 20px;
		height: 20px;
		box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.4); 
		border-left: 1px #ffffff solid;
		border-top: 1px #ffffff solid;
		background-color: #DFDEDC;
	}

	.batsu::before, .batsu::after {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		width: 2px;
		height: 15px;
		background: #000;
	}

	.batsu::before {
		transform: translate(-50%,-50%) rotate(45deg);
	}

	.batsu::after {
		transform: translate(-50%,-50%) rotate(-45deg);
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

	.contents{
		padding: 15px;
	}

	@media screen and (max-width: 1024px) {
		.box{
			margin-top: 0px;
			width: 100vw;
			height: 100vh;
		}
		.container{
			margin-top: 0px;
		}
		.deskIco{
			margin-top: 3vh;
			margin-left; 25px;
		}
		.titleBar{
			border-radius: 0px;
		}
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

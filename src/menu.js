import React,{Component} from "react";
import menuData from "./testMenuData"
import belowInfoValue from "./belowInfo"

class menu extends Component {
	state ={
		menu:menuData
	}
	reviewItemHandler = (item)=>{
		this.setState({
			menu:this.state.menu.map((itemValue)=>{
				return itemValue.itemName !== item? itemValue: {...itemValue,showInput:!itemValue.showInput}
			})
		})
	}
	reviewChangeHandler = (item,value)=>{
		this.setState({
			menu:this.state.menu.map((itemValue)=>{
				return itemValue.itemName !== item ? itemValue: {...itemValue,review:value.trim()}
			})
		})
	}
	emptyField = (item)=>{
		this.setState({
			menu:this.state.menu.map((itemValue)=>{
				return itemValue.itemName !== item ? itemValue: {...itemValue,review:'',showInput:'',specialMessage:true}
			})
		})
		setTimeout(() => {
		  this.setState({
			menu:this.state.menu.map((itemValue)=>{
				return itemValue.itemName !== item ? itemValue: {...itemValue,specialMessage:false}
			})
		})
		}, 600)
	}

	showReviews = (item)=>{
		this.setState({
			menu:this.state.menu.map((itemValue)=>{
				return itemValue.itemName !== item ? itemValue: {...itemValue,showReviews:true}
			})
		})
	}

	render(){
		console.log(this.state.menu)
		const belowInfo = belowInfoValue
		return(
			<div>
				{this.state.menu.map((item)=>{
					return (
						<div key={item.itemName} style={{margin:"20px auto",padding:"auto",boxShadow:"0 2px 2px",width:"500px",height:"auto"}}>
						<p style={{"fontSize":"20px",padding:"10px",fontWeight:"bold"}}>
							Item: {item.itemName.charAt(0).toUpperCase()+ item.itemName.slice(1)}
						</p>
						<p style={{padding:"10px"}}>
							Price: {item.price.toFixed(2)}
						</p>
						{item.showReviews?item.reviews.map((reviewValue)=>
							(<div key={Date.now()+ Math.random()+Math.random()}>
							<div style={{boxShadow:"0px 0.5px 0.5px",padding:"10px", margin:"5px",backgroundColor:"pink"}}>
							<p style={{fontWeight:"bold"}}>{reviewValue.user}</p>
							<p>{reviewValue.review}</p>
							</div>
							
							</div>
							)):belowInfo(item,this)}
						</div>)
						}
				)}
			</div>

			)
	}
}

	
export default menu
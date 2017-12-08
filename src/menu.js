import React,{Component} from "react";

class menu extends Component {
	state ={
		menu:[
			{
				itemName:"cheeseBurger",
				price: 5,
				showInput:false,
				review:'',
				specialMessage:false
			},{
				itemName:"soufle",
				price: 7,
				showInput:false,
				review:'',
				specialMessage:false
			},{
				itemName:"pizza",
				price: 9,
				showInput:false,
				review:'',
				specialMessage:false
			},{
				itemName:"salad",
				price: 8,
				showInput:false,
				review:'',
				specialMessage:false
			},{
				itemName:"pumpkin pie",
				price: 4,
				showInput:false,
				review:'',
				specialMessage:false
			},{
				itemName:"mashed potatoes",
				price: 6,
				showInput:false,
				review:'',
				specialMessage:false
			}
		]
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
	render(){
		console.log(this.state.menu)
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
							{this.props.reviewedItems.includes(item.itemName)?<button style={{padding:"10px", margin:"5px"}} onClick={()=>this.reviewItemHandler(item.itemName)}>Review this item?</button>:null}
						<br/>
						{	item.showInput?
								(
								<div>
									<textarea
									onChange={(event)=>this.reviewChangeHandler(item.itemName,event.target.value)} 
									style={{padding:"10px", margin:"5px"}}
									placeholder="Write your review here">
									{item.review}
									</textarea>
									<br/>
									<button style={{padding:"10px", margin:"5px"}}
									 onClick={()=>this.emptyField(item.itemName)}>
										submit
									</button>
								</div>
								)
								:
								null
						}
							{
								item.specialMessage?<p>Thank You!</p>:null
							}
						</div>)
				})}
			</div>

			)
	}
}

	
export default menu
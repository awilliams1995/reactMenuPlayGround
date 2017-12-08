import React from "react";

const belowInfo = (item,that)=>(<div>{that.props.reviewedItems.includes(item.itemName)?
								<button style={{padding:"10px", margin:"5px"}} onClick={()=>that.reviewItemHandler(item.itemName)}>
								Tell us what you thought!
								</button>:null}
							<button style={{padding:"10px", margin:"5px"}} onClick={()=>that.showReviews(item.itemName)}>
								Show Reviews
							</button>

						<br/>
						{	item.showInput?
								(
								<div>
									<textarea
									cols={20}
									rows={5}
									onChange={(event)=>that.reviewChangeHandler(item.itemName,event.target.value)} 
									style={{margin:"5px"}}
									placeholder=" Write your review here ">
									{item.review}
									</textarea>
									<br/>
									<button style={{padding:"10px", margin:"5px"}}
									 onClick={()=>that.emptyField(item.itemName)}>
										submit
									</button>
								</div>
								)
								:
								null
						}
							{
								item.specialMessage?<p>Thank You!</p>:null
							}</div>)

export default belowInfo
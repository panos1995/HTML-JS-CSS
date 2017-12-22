window.onload = function(){
document.getElementById("Convert_").addEventListener("click", Convert_);
document.getElementById("Reverse_").addEventListener("click",Reverse_);

};

function Convert_(){
	
	var list1=document.getElementById("list1_");
var data_1=list1.value;
var list2=document.getElementById("list2_");
var data_2=list2.value;
var input1=document.getElementById("input1");

var dataValues=[1.12215,0.7734165,1.55476273,123.598414,0.689227276,1.3855214,110.144289,0.497449,79.4966406,159.808349];
var ValueString=["EUR-EURO","USD-US DOLLAR","GBP-British Pound","AUD-Australian Dollar","JPY-Japanese Yen"];
var resultelement=document.getElementById("result");
var resultValue=parseFloat(resultelement.value);

var inputValue=parseFloat(input1.value);
 
if(data_1===ValueString[0] ){
	 
		//EURO-EURO//
		if(data_2===ValueString[0]){
			resultelement.value=inputValue;
			//EURO-USD//
		}else if(data_2===ValueString[1]){
			
			var result_=parseFloat(inputValue*dataValues[0]);
			
			resultelement.value=result_;
		}//EURO-GBP//
		else if(data_2===ValueString[2]){
			resultelement.value=parseFloat(inputValue*dataValues[1]);
		}//EURO-AUD//
		else if(data_2===ValueString[3]){
			resultelement.value=parseFloat(inputValue*dataValues[2]);
		}//EURO-JPY//
		else if(data_2===ValueString[4]){
			resultelement.value=parseFloat(inputValue*dataValues[3]);

		} }
			//****USD*******//
		 if(data_1===ValueString[1]){
			 
			//USD-EURO//
				if(data_2===ValueString[0]){
				
				resultelement.value=parseFloat(inputValue*(1/dataValues[0]));
			//USD-USD//
					}else if(data_2===ValueString[1]){
					resultelement.value=parseFloat(inputValue);
					}//USD-GBP//
					else if(data_2===ValueString[2]){
					resultelement.value=parseFloat(inputValue*dataValues[4]);
					}//USD-AUD//
						else if(data_2===ValueString[3]){
						resultelement.value=parseFloat(inputValue*dataValues[5]);
						}//USD-JPY//
							else if(data_2===ValueString[4]){
							resultelement.value=parseFloat(inputValue*dataValues[6]);}}
						//******GBP*******//
			if(data_1===ValueString[2]){

					if(data_2===ValueString[0]){
						
											resultelement.value=parseFloat(inputValue*(1/dataValues[1]));
											//GBP-USD//
											}else if(data_2===ValueString[1]){
											resultelement.value=parseFloat(inputValue*(1/dataValues[4]));
											}//GBP-GBP//
												else if(data_2===ValueString[2]){
												resultelement.value=parseFloat(inputValue);
											}//GBP-AUD//
													else if(data_2===ValueString[3]){
													resultelement.value=parseFloat(inputValue*(1/dataValues[7]));
													}//GBP-JPY//
															else if(data_2===ValueString[4]){
															resultelement.value=parseFloat(inputValue*dataValues[9]);
															}
														}
																//****AUD****//
															if(data_1===ValueString[3]){	
																
																	//AUD-EURO//
																if(data_2===ValueString[0]){
																	resultelement.value=parseFloat(inputValue*(1.0/dataValues[2]));
																			//AUD-USD//
																		}else if(data_2===ValueString[1]){
																		resultelement.value=parseFloat(inputValue*(1.0/dataValues[5]));
																		}		//AUD-GBP//
																		else if(data_2===ValueString[2]){
																		resultelement.value=parseFloat(inputValue*dataValues[7]);
																		}		//AUD-AUD//
																			else if(data_2===ValueString[3]){
																			resultelement.value=parseFloat(inputValue);
																			}		//AUD-JPY//
																				else if(data_2===ValueString[4]){
																				resultelement.value=parseFloat(inputValue*dataValues[8]);}}

																					//JPY//

																				if(data_1===ValueString[4]){
																					//JPY-EURO//
																						if(data_2===ValueString[0]){
																							resultelement.value=parseFloat(inputValue*(1.0/dataValues[3]))
																									//JPY-USD//
																								}else if(data_2===ValueString[1]){
																								resultelement.value=parseFloat(inputValue*(1.0/dataValues[6]));
																								}		//JPY-GBP//
																								else if(data_2===ValueString[2]){
																								resultelement.value=parseFloat(inputValue*(1.0/dataValues[9]));
																								}		//JPY-AUD//
																									else if(data_2===ValueString[3]){
																									resultelement.value=parseFloat(inputValue*(1.0/dataValues[8]));
																									}		//JPY-JPY//
																										else if(data_2===ValueString[4]){
																										resultelement.value=parseFloat(inputValue);}
																									}
																										}


function Reverse_(){


var list1_=document.getElementById("list1_");
var list2_=document.getElementById("list2_");

var temp=list2_.value;
list2_.value=list1_.value;
list1_.value=temp;

}


																				
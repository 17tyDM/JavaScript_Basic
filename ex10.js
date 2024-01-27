const myError = Error("This is My Error");
try{
	throw myError;
}catch(e){
	console.log(e);
}finally{
	console.log('後処理');
}
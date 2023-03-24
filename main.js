// remove duplicate element from array//
let arr=[1,2,3,4,5,5,5,6,6,6,4,2,1];
function removeduplicate(arr)
{
	 let result=[];
	 for(i=0;i<arr.length;i++)
	 {
		  if(result.length===0)
		  {
			  result.push(arr[i]);
		  }
		  else if (result.indexOf(arr[i])===-1)
		  {
			  result.push(arr[i]);
		  }
	 }
	 return result
}
console.log(removeduplicate(arr));
//2.find duplicate number//
let myarr=[1,2,2,3,3,4,54,5,6,7];
let p=myarr.filter((each,index)=>
{
	 return myarr.indexOf(each)!=index
});
console.log(p);


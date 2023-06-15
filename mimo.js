function check()
    {
        var pincode= document.getElementById("pincode_search").value;
        if(pincode == 517102)
        {
            alert("Well! ")
        }
        else if(pincode=='')
        {
            alert("Pincode should not be empty af! ")
        }
        else
        {
            alert("Sorry, Our service is not available in your location yet!");
        }
    }
document.getElementById("formSubmit").addEventListener("click",check)
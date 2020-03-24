const validate = {
     text: function(str) {
        if(str === '' || str=== null || str === undefined || str.length <=0){
            return false
        }else{
            return true
        }
        
    },
    rePassWordCheck: function(pass,repass){
        if(pass === repass){
            return true
        }else{
            return false
        }
    }
}
export default validate;
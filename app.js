function error(f){
    var d = (Number)(document.getElementById("dateIn").value);
    var m = (Number)(document.getElementById("monthIn").value);
    var y = (Number)(document.getElementById("yearIn").value);
    console.log(y);
    console.log(typeof(d));
    if (f==1){
        document.getElementById("error3").style.color = "rgb(255, 87, 87)";
        document.getElementsByClassName("disp3")[0].style.color = "rgb(255, 87, 87";
        document.getElementById("error3").innerHTML = "Must be in past";
        return 0;
    }else{
        if (!((d>='1' & d<='31'))){
            document.getElementById("error1").style.color = "rgb(255, 87, 87)";
            document.getElementsByClassName("disp1")[0].style.color = "rgb(255, 87, 87)";
            return 0;
        }
        else if(f==0 && !(m>='1' && m<='12')){
            document.getElementById("error2").style.color = "rgb(255, 87, 87)";
            document.getElementsByClassName("disp2")[0].style.color = "rgb(255, 87, 87)";
            return 0;
            
        }
        else if (f==0 && !(y>='1')){
            document.getElementById("error3").style.color = "rgb(255, 87, 87)";
            document.getElementsByClassName("disp3")[0].style.color = "rgb(255, 87, 87)";
            return 0;
            
        }
        return 1;
    }

  

        
}

function putValue(){
    var d = document.getElementById("dateIn").value;
    var m = document.getElementById("monthIn").value;
    var y = document.getElementById("yearIn").value;
    if (error(0)){
        var today = new Date();

        
        var past = new Date(m + '/' + d + '/' + y);
        let diffTime = BigInt(today - past);
        let f = 1;
        
        console.log(diffTime)
        if (diffTime < 0 ){
            f = 0;
            error(1);
        }else{
            
            d = today.getDate() - d;
            if (d <= 0){
                d += 31;
                m += 1;
            }
            m = today.getMonth() + 1 - m;

            if (m <= 0){
                m += 12;
                y++;
            }
            y = today.getFullYear() - y; 
            document.getElementById("A221").innerHTML = y;
            document.getElementById("A231").innerHTML = m;
            document.getElementById("A241").innerHTML = d;
        }
        
    }
    
    
    
    document.getElementById("dateIn").value = "";
    document.getElementById("monthIn").value = "";
    document.getElementById("yearIn").value = "";
    
    
    

}


function start(){
    document.getElementById("error1").innerHTML = "Invalid day";
    document.getElementById("error2").innerHTML = "Invalid month";
    document.getElementById("error3").innerHTML = "Invalid year";


    document.getElementsByClassName("disp1")[0].style.color = "rgb(138,153,180)";
    document.getElementsByClassName("disp2")[0].style.color = "rgb(138,153,180)";
    document.getElementsByClassName("disp3")[0].style.color = "rgb(138,153,180)";
    document.getElementById("error1").style.color = "white";
    document.getElementById("error2").style.color = "white";
    document.getElementById("error3").style.color = "white";
    document.getElementsByClassName("disp3")[0].value = "This field is required";
    putValue();
}





$(function(){
    $("a[href^='https://']").attr("target","_blank"); 

    
    $("#our-service-text i").mouseenter(function(){
        $(this).css("color","#ffffff").css("background-color","#1565c0").css("transition-duration","1s");
    });

    $("#our-service-text i").mouseleave(function(){
        $(this).css("color","#1565c0").css("background-color","#ffffff").css("transition-duration","1s");
    });

    $("#imagen").click(function(){
        $(this).hide();
    });
    $("#imagen1").click(function(){
        $(this).hide();
    });
    $("#imagen2").click(function(){
        $(this).hide();
    });
    $("#imagen3").click(function(){
        $(this).hide();
    });
    $("#imagen4").click(function(){
        $(this).hide();
    });
    $("#imagen5").click(function(){
        $(this).hide();
    });


    var noticiasBlanco = true;
    $("#icono1").click(function(){
        if(noticiasBlanco == true){
            $("#navigation").css("background-color","#1565c0").css("color","#ffffff");
            noticiasBlanco = false;
        }
        else{
            $("#navigation").css("background-color","#732CE8").css("color","#EBE2BE");
            noticiasBlanco = true;
        }
    })
    var noticiasBlanco = true;
    $("#icono2").click(function(){
        if(noticiasBlanco == true){
            $("#navigation").css("background-color","#1565c0").css("color","#ffffff");
            noticiasBlanco = false;
        }
        else{
            $("#navigation").css("background-color","#20E8BA").css("color","#EBE2BE");
            noticiasBlanco = true;
        }
    })
    var noticiasBlanco = true;
    $("#icono3").click(function(){
        if(noticiasBlanco == true){
            $("#navigation").css("background-color","#1565c0").css("color","#ffffff");
            noticiasBlanco = false;
        }
        else{
            $("#navigation").css("background-color","#F59A2F").css("color","#EBE2BE");
            noticiasBlanco = true;
        }
    })

    $("#service").click(function(){
        fetch("componentes/service.html")
            .then(function(response){
                return response.text();
        })
            .then(function(data){
            console.log(data);
            $("#main").html(data);
        })
    })


    $("#project").click(function(){
        fetch("componentes/projects.html")
            .then(function(response){
                return response.text();
        })
            .then(function(data){
            console.log(data);
            $("#main").html(data);
        })
    })



})
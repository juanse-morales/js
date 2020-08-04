$(document).ready(function(){
  
  // Slider
  if(window.location.href.indexOf('index')> -1){
    $('.bxslider').bxSlider({
      mode: 'horizontal',
      captions: true,
      slideWidth: 1200,
      auto: true
    });
  

    // Posts
    var posts = [
      {
        title: 'Primer título',
        date: 'Publicado el '+moment().format('dddd, ')+moment().date()+' de '+moment().format('MMMM')+' del '+moment().format('YYYY'),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget iaculis mauris. Fusce elementum sapien est, sed feugiat augue euismod in. Sed tortor felis, sagittis et tortor eget, rhoncus tempor libero. Sed mollis dignissim ipsum, ut venenatis ipsum feugiat sed. Mauris tempus ut sapien vel dictum. Nulla facilisi. Integer aliquet condimentum maximus. Suspendisse ante diam, malesuada vel justo quis, mattis finibus dolor. Mauris et velit et lectus tincidunt scelerisque ac eget urna. Aliquam orci risus, aliquam et neque eu, maximus cursus nulla. Praesent mauris lacus, gravida a mi vitae, dictum pellentesque turpis. Vestibulum quis nisi eget metus imperdiet finibus vel ac ante. In hac habitasse platea dictumst. Donec id elementum nunc.'
      },
      {
        title: 'Segundo título',
        date: 'Publicado el '+moment().format('dddd, ')+moment().date()+' de '+moment().format('MMMM')+' del '+moment().format('YYYY'),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget iaculis mauris. Fusce elementum sapien est, sed feugiat augue euismod in. Sed tortor felis, sagittis et tortor eget, rhoncus tempor libero. Sed mollis dignissim ipsum, ut venenatis ipsum feugiat sed. Mauris tempus ut sapien vel dictum. Nulla facilisi. Integer aliquet condimentum maximus. Suspendisse ante diam, malesuada vel justo quis, mattis finibus dolor. Mauris et velit et lectus tincidunt scelerisque ac eget urna. Aliquam orci risus, aliquam et neque eu, maximus cursus nulla. Praesent mauris lacus, gravida a mi vitae, dictum pellentesque turpis. Vestibulum quis nisi eget metus imperdiet finibus vel ac ante. In hac habitasse platea dictumst. Donec id elementum nunc.'
      },
      {
        title: 'Tercer título',
        date: 'Publicado el '+moment().format('dddd, ')+moment().date()+' de '+moment().format('MMMM')+' del '+moment().format('YYYY'),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget iaculis mauris. Fusce elementum sapien est, sed feugiat augue euismod in. Sed tortor felis, sagittis et tortor eget, rhoncus tempor libero. Sed mollis dignissim ipsum, ut venenatis ipsum feugiat sed. Mauris tempus ut sapien vel dictum. Nulla facilisi. Integer aliquet condimentum maximus. Suspendisse ante diam, malesuada vel justo quis, mattis finibus dolor. Mauris et velit et lectus tincidunt scelerisque ac eget urna. Aliquam orci risus, aliquam et neque eu, maximus cursus nulla. Praesent mauris lacus, gravida a mi vitae, dictum pellentesque turpis. Vestibulum quis nisi eget metus imperdiet finibus vel ac ante. In hac habitasse platea dictumst. Donec id elementum nunc.'
      },
      {
        title: 'Cuarto título',
        date: 'Publicado el '+moment().format('dddd, ')+moment().date()+' de '+moment().format('MMMM')+' del '+moment().format('YYYY'),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget iaculis mauris. Fusce elementum sapien est, sed feugiat augue euismod in. Sed tortor felis, sagittis et tortor eget, rhoncus tempor libero. Sed mollis dignissim ipsum, ut venenatis ipsum feugiat sed. Mauris tempus ut sapien vel dictum. Nulla facilisi. Integer aliquet condimentum maximus. Suspendisse ante diam, malesuada vel justo quis, mattis finibus dolor. Mauris et velit et lectus tincidunt scelerisque ac eget urna. Aliquam orci risus, aliquam et neque eu, maximus cursus nulla. Praesent mauris lacus, gravida a mi vitae, dictum pellentesque turpis. Vestibulum quis nisi eget metus imperdiet finibus vel ac ante. In hac habitasse platea dictumst. Donec id elementum nunc.'
      },
      {
        title: 'Quinto título',
        date: 'Publicado el '+moment().format('dddd, ')+moment().date()+' de '+moment().format('MMMM')+' del '+moment().format('YYYY'),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget iaculis mauris. Fusce elementum sapien est, sed feugiat augue euismod in. Sed tortor felis, sagittis et tortor eget, rhoncus tempor libero. Sed mollis dignissim ipsum, ut venenatis ipsum feugiat sed. Mauris tempus ut sapien vel dictum. Nulla facilisi. Integer aliquet condimentum maximus. Suspendisse ante diam, malesuada vel justo quis, mattis finibus dolor. Mauris et velit et lectus tincidunt scelerisque ac eget urna. Aliquam orci risus, aliquam et neque eu, maximus cursus nulla. Praesent mauris lacus, gravida a mi vitae, dictum pellentesque turpis. Vestibulum quis nisi eget metus imperdiet finibus vel ac ante. In hac habitasse platea dictumst. Donec id elementum nunc.'
      }
    ];
  
    posts.forEach((item,index)=>{
      var post = 
      `<article class="post">
  <h2>${item.title}</h2>
  <span class="date">${item.date}</span>
  <p>${item.content}</p>
  <a href="#" class="button-more">Leer más</a>
</article>`;
      $('#posts').append(post);
    });
  }
  // Theme
  var theme = $('#theme');

  $('#to-green').click(function(){
    theme.attr('href','css/green.css');
  });

  $('#to-red').click(function(){
    theme.attr('href','css/red.css');
  });

  $('#to-blue').click(function(){
    theme.attr('href','css/blue.css');
  });


  // Scroll subir
  $('.subir').click(function(event){
    event.preventDefault(); // Para que el link no haga su función fundamental que es ir a otro sitio.
    $('html, body').animate({
      scrollTop: 0
    }, 500);
    return false;
  });


  // Login falso
  $('#login form').submit(function(){
    var form_name = $('#form_name').val();

    localStorage.setItem("form_name", form_name);
  });

  var form_name = localStorage.getItem("form_name");
  if(form_name!=null && form_name!= "undefined"){
    var about_parrafo = $('#about p')
    about_parrafo.html('Bienvenido, '+form_name+' - ');
    about_parrafo.append('<a href="#" id="logout">Cerrar sesión</a>');
    $('#login').hide();
    $('#logout').click(function(){
      localStorage.clear();
      location.reload();
    });
  }

  // Acordeon
  if(window.location.href.indexOf('about')> -1){
    $('#acordeon').accordion();
  }

  // Reloj
  if(window.location.href.indexOf('reloj')> -1){
    setInterval(function(){
      var reloj = moment().format('h:mm:ss');
      $('#reloj').html(reloj);
    },1000);
  }
});
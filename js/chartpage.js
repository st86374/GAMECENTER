//垂直圖表
Chart.defaults.global.legend.position="bottom";

var lineCtx =  document.getElementById("barChart");
var myLineChart = new Chart(lineCtx, {
    type: 'bar',
    data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "台北店",
            fill: true,
            lineTension: 0.2,
            backgroundColor: "rgba(255,99,132,0.6)",
            borderColor: "rgba(255,99,132,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 10,
            pointHoverBackgroundColor: "rgba(0,0,0,1)",
            pointHoverBorderColor: "rgba(0,0,0,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [5, 16, 28, 30, 46, 58, 70],
            spanGaps: false,
            borderWidth: 2
        },
        {
            label: "台南店",
            fill: true,
            lineTension: 0.2,
            backgroundColor: "rgba(54, 162, 235,0.6)",
            borderColor: "rgba(54, 162, 235,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 10,
            pointHoverBackgroundColor: "rgba(0,0,0,1)",
            pointHoverBorderColor: "rgba(0,0,0,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [0, 5, 15, 22, 30, 32, 47],
            spanGaps: false,
            borderWidth: 2
        }
    ]
},
    options: {
        scales: {
            xAxes: [{
                display: true
            }]
        }
    }
});
//圓圖表
var barCtx = document.getElementById("dpChart");
var myBarChart = new Chart(barCtx, {
    type: 'doughnut',
    data: {
        labels: ["ClassAAA", "ClassBBB", "ClassCCC", "ClassDDD", "ClassEEE", "ClassFFF"],
        datasets: [{
            
            label: 'total',          
            data: [30, 13, 17, 11, 20, 9],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
      legend: {
        display: false,
        position: 'top',
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
//曲線圖表
var speedCanvas = document.getElementById("lineChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var dataFirst = {
    label: "台北店",
    data: [0, 59, 75, 20, 20, 55, 40],
    lineTension: 0,
    fill: false,
    borderColor: 'rgba(255,99,132,1)'
  };

var dataSecond = {
    label: "台南店",
    data: [20, 15, 60, 60, 65, 30, 70],
    lineTension: 0,
    fill: false,
  borderColor: 'rgba(54, 162, 235,1)'
  };

var speedData = {
  labels:["January", "February", "March", "April", "May", "June", "July"],
  datasets: [dataFirst, dataSecond]
};

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    }
};

var lineChart = new Chart(speedCanvas, {
  type: 'line',
  data: speedData,
  options: chartOptions
});
/*次級選單*/
$(".rotate_toggle").click(function () {
  $(".rotate").toggleClass("down");
})
//水平bar
var barCtx = document.getElementById("hzbarChart");
var myBarChart = new Chart(barCtx, {
    type: 'horizontalBar',
    data: {
        labels: ["Youtube", "Facebook", "Line", "Instagram", "Twitter", "Others"],
        datasets: [{
            label: 'total',        
            data: [25, 13, 17, 12, 24, 5],
            backgroundColor: [
                'rgba(255, 0, 0, 0.6)',
                'rgba(59, 89, 152, 0.6)',
                'rgba(0, 195, 0, 0.6)',
                'rgba(255, 48, 108, 0.6)',
                'rgba(29, 161, 242, 0.6)',
                'rgba(51, 51, 51, 0.6)'
            ],
            borderColor: [
                'rgba(255, 0, 0, 1)',
                'rgba(59, 89, 152, 1)',
                'rgba(0, 195, 0, 1)',
                'rgba(255, 48, 108, 1)',
                'rgba(29, 161, 242, 1)',
                'rgba(51, 51, 51, 1)'
            ],
            borderWidth: 1,

        },
      ]
    },
    
    options: {
      legend: {
        display: false,
        position: 'top',
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
    
});

//日期選擇
$(function() {
  $( "#validationTooltip08,#validationTooltip07" ).datepicker({
    showButtonPanel: true
  });
});

//toast通知
$('#npbtn').click(function(){
    toastr.success("操作成功");
  });
  $('#debtn').click(function(){
    toastr.error("操作失敗");
  });


//左選單開關
$('#menu-toggle').click(function () {
  event.preventDefault();
  $('.main').toggleClass('active');
});
//光暗開關
$(document).ready(function () {
  $('.dn_toggle').click(function () {
    $('.dn_toggle').toggleClass('active')
    $('body,.bg,.bg_h,.rb_icon,.sbg,th,td,h2,.dn_tt,.bgs_h').toggleClass('night')
    $('table').toggleClass('table-dark')
  });
});

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

//移動開關
$(document).ready(function () {
  $('.lm_toggle').click(function () {
    $('.lm_toggle').toggleClass('active')
    $('.card-header,.nav-pills').toggleClass('move')
    $('.sortable').toggleClass('ui-sortable-disabled');
    $('#left,#right').sortable({ connectWith: ".sortable" }).disableSelection();
  });
});
//編輯器
var editor = CKEDITOR.replace('editorDemo');

$('#alertContent').click(function(){
 	// CKEDITOR.instances.editorDemo.updateElement();
	console.log($('textarea[name=editorDemo]').val());
	console.log(CKEDITOR.instances.editorDemo.getData());
});
/* 行事曆*/
$('#calendar').fullCalendar({
  editable: true,
  events: [{
    title: 'AAA發售日',
    start: moment().subtract(1, 'days').format('YYYY-MM-DD'),
    color: '#6c757d',
    textColor: '#fff'

  }, {
    title: '賣場免運促銷',
    start: moment().add(7, 'days').format('YYYY-MM-DD'),
    end: moment().add(14, 'days').format('YYYY-MM-DD'),
    color: '#fd7e14',
    textColor: '#fff'
  }, {
    title: 'BBB期間限定',
    start: moment().add(2, 'days').format('YYYY-MM-DD'),
    end: moment().add(5, 'days').format('YYYY-MM-DD'),
    color: '#6c757d',
    textColor: '#fff'
  }]
});
/*備忘錄*/
init();
function init() {
  $('#input').hide();
  var howmany = $('.todo').length;
  $('#dolist').text(howmany);
}
//刪除鍵
$('.remove').on('click', function () {
  $(this).parent().remove();
  var count = $('.done').length;
  var howmany = $('.todo').length;
  var final = howmany - count
  $('#dolist').text(final);
});
//完成鍵
$('.finish').on('click', function () {
  $(this).parent().toggleClass('done');
  var count = $('.done').length;
  var howmany = $('.todo').length;
  var final = howmany - count
  $('#dolist').text(final);
})

//滑出滑入input
$('.addItem').on('click', function () {
  $('#input').fadeToggle();
})
//可變換順序
$('#list').sortable();
$('#plist').sortable();
//新增
$('.add').click(function () {
  var str = $('#item').val();
  if (str.length > 10) { str = str.substring(0, 20) + '...' }
  if (str !== null && str !== '') {
    $('#list').append("<li class='todo'><a class='remove'><i class='fa fa-trash'></i></a>&nbsp;<a class='finish'><i class='fa fa-thumbs-up'></i></a>&nbsp;" + str + "</li>").fadeIn();
    var count = $('.done').length;
    var howmany = $('.todo').length;
    var final = howmany - count
    $('#dolist').text(final);
    //完成鍵
    $('.finish').on('click', function () {
      $(this).parent().toggleClass('done');
      var count = $('.done').length;
      var howmany = $('.todo').length;
      var final = howmany - count
      $('#dolist').text(final);
    })
    //刪除鍵
    $('.remove').on('click', function () {
      $(this).parent().remove();
      var count = $('.done').length;
      var howmany = $('.todo').length;
      var final = howmany - count
      $('#dolist').text(final);
    });

    $('#item').val('');
  }
})

//時鐘
function printtime() {
  var nowdate = moment().tz("Asia/Taipei").format("MMM Do YYYY");
  document.getElementById("ce001_1").innerHTML = nowdate;
  var now = moment().tz("Asia/Taipei").format("HH:mm");
  document.getElementById("ce001_2").innerHTML = now;

  var nydate = moment().tz("America/New_york").format("MMM Do YYYY");
  document.getElementById("ce002_1").innerHTML = nydate;
  var nytime = moment().tz("America/New_york").format("HH:mm");
  document.getElementById("ce002_2").innerHTML = nytime;

  var tokyodate = moment().tz("Asia/Tokyo").format("MMM Do YYYY");
  document.getElementById("ce003_1").innerHTML = tokyodate;
  var tokyotime = moment().tz("Asia/Tokyo").format("HH:mm");
  document.getElementById("ce003_2").innerHTML = tokyotime;

  var thailanddate = moment().tz("Asia/bangkok").format("MMM Do YYYY");
  document.getElementById("ce004_1").innerHTML = thailanddate;
  var thailandtime = moment().tz("Asia/bangkok").format("HH:mm");
  document.getElementById("ce004_2").innerHTML = thailandtime;

  var parisdate = moment().tz("Europe/paris").format("MMM Do YYYY");
  document.getElementById("ce005_1").innerHTML = parisdate;
  var paristime = moment().tz("Europe/paris").format("HH:mm");
  document.getElementById("ce005_2").innerHTML = paristime;
}
printtime();
setInterval(printtime, 30);

//編輯器


/*隨機背景圖片
<style>
body {
  height: 100vh;
  width: 100vw;
  background: #ffffff url("https://images.pexels.com/photos/70232/pexels-photo-70232.jpeg?w=940&h=650&auto=compress&cs=tinysrgb") no-repeat fixed center;
  background-size: cover;
}
</style>
<script>
  $(document).ready(function () {
      var text = '';
      var author = '';
      //Run function "random" when DOM is ready
      random();
      // Run function "random" on click
      $("#quote-btn").on("click", random);

      // FUNCTION "RANDOM" for pulling random images and quotes
      function random() {
          // Generate random quote from Quotes on Design API. Note: copied from website; the url was edited to include the main domain and an extra set of }); was removed for code to work.
          $.ajax({
              url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
              success: function (data) {
                  var post = data.shift();
                  author = ' -' + post.title;
                  text = post.content;
                  var length = author.length + text.length;
                  $('#quote-author').text(author);
                  $('#quote-text').html(text);
                  if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
                      $('#quote-source').html('Source:' + post.custom_meta.Source);
                  } else {
                      $('#quote-source').text('');
                  }
              },
              cache: false
          });
          //FUNCTION "TWITTER" for creating a tweet using Twitter's API on click
          $("#tweet-btn").on("click", function () {
              window.open('https://twitter.com/intent/tweet?text=' + text + author, '_blank');
          });
          //images array
          var images = [
              "./img/city.jpg", "./img/moutain.jpg", "./img/beach.jpg"
          ];
          var cardimgs = [
              "./img/card1.jpg", "./img/card2.jpg", "./img/card3.jpg"
          ];
          // Generate random image from images array.
          $('body').css({ 'background': '#ffffff url(' + images[Math.floor(Math.random() * images.length)] + ') no-repeat fixed center', 'background-size': 'cover' });
      };
  });

</script>
*/
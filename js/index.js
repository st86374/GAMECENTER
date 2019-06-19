
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

// 編輯的 Modal 事件
$('#editModal').on('show.bs.modal', function (event) {
  const btn = $(event.relatedTarget);
  // console.log(btn);
  const title = btn.data("title");
  // console.log(title);
  $("#editModalLabel").text(title);

});

$('#removeModal').on('show.bs.modal', function (event) {
  const btn = $(event.relatedTarget);
  // console.log(btn);
  const title = btn.data("title");
  // console.log(title);
  $("#removeModalLabel").text("刪除" + title);
})


window.chartColors = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)'
};

var randomScalingFactor = function () {
  return Math.round(Math.random() * 100);
};

var config = {
  type: 'pie',
  data: {
    datasets: [{
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
      ],
      backgroundColor: [
        window.chartColors.red,
        window.chartColors.orange,
        window.chartColors.yellow,
        window.chartColors.green,
        window.chartColors.blue,
      ],
      label: 'Dataset 1'
    }],
    labels: [
      "Red",
      "Orange",
      "Yellow",
      "Green",
      "Blue"
    ]
  },
  options: {
    responsive: true
  }
};


// bar
var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var colors = Chart.helpers.color;
var barChartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [{
    label: 'Dataset 1',
    backgroundColor: colors(window.chartColors.red).alpha(0.5).rgbString(),
    borderColor: window.chartColors.red,
    borderWidth: 1,
    data: [
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor()
    ]
  }, {
    label: 'Dataset 2',
    backgroundColor: colors(window.chartColors.blue).alpha(0.5).rgbString(),
    borderColor: window.chartColors.blue,
    borderWidth: 1,
    data: [
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor()
    ]
  }]

};

window.onload = function () {
  // pie
  document.querySelectorAll('.chart-item').forEach(function (item) {
    config.data.datasets.forEach(function (dataset) {
      dataset.data = dataset.data.map(function () {
        return randomScalingFactor();
      });
    });
    var ctx = item.getContext("2d");
    window.myPie = new Chart(ctx, config);
  })


  // bar
  var barCtx = document.getElementById("barCanvas").getContext("2d");
  window.myBar = new Chart(barCtx, {
    type: 'bar',
    data: barChartData,
    options: {
      responsive: true,
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart'
      }
    }
  });
};
/*次級選單*/
$(".rotate_toggle").click(function () {
  $(".rotate").toggleClass("down");
})

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
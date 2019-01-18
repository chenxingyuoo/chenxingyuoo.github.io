var hg = null;
var orderId = null;

$(function () {
  $(".close").on("click", function () {
    if (window.isH5) {
      window.history.go(-1);
    } else {
      wx.miniProgram.navigateBack();
    }
  })


  document.getElementById("levelSwitchBox").addEventListener("webkitAnimationEnd", function () {
    $("#levelSwitchBox").css("display", "none")
    // $("#levelSwitchBoxMain").attr("src", "../img/level_2_mains.jpg?v=1.0.0")
    // $("#levelSwitchBoxMain").css({
    //   backgroundImage: 'url("../img/level_'+self.level+'_mains.png")'
    // })
    $("#levelSwitchBox").removeClass("hidden")
  })

  function startGame() {
    $('#start-box').hide()
    $("#levelSwitchBoxMain").css({
      backgroundImage: 'url("../img/level_1_mains.jpg")'
    })
    $("#levelSwitchBox").css("display", "block");
    $("#levelSwitchBox").addClass("hidden")

    setTimeout(() => {
      createHg(false, 1)
    }, 2000)
  }

  $('#try-btn').on('click', startGame)
  $('#start-btn').on('click', startGame)

  // 再挑战一次
  $('#again-btn').on('click', () => {
    $("#app").removeClass("blur");
    $('#gameSuccessBox').hide()
    startGame()
  })

  // 重新开始
  $("#game-restart-btn").on("click", function () {
    $("#app").removeClass("blur");
    $('#gameOverBox').hide()

    createHg(false, 1)
  })

  // 复活
  $('#game-resurrection-btn').on('click', function (){
    $("#app").removeClass("blur");
    $('#gameOverBox').hide()

    // hg.gamePlay()
    createHg(false, hg.level)
  })
});

function playAudioInWechat(obj) {
  if (window.WeixinJSBridge) {
    WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
      obj.currentTime = 0;
      obj.play();
      console.log(22, obj);
    }, false);
  } else {
    // document.addEventListener("WeixinJSBridgeReady", function () {
    //     WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
    //         obj.currentTime=0;
    //         obj.play();
    //     });
    //     console.log(22,obj);
    // }, false);
    obj.currentTime = 0;
    obj.play();
  }

  console.log(22, obj);
}

function createHg(GAMEMODE, level) {
  if (hg) {
    hg = null
  }
  //初始化游戏, 两个参数分别表示"游戏所处的canvas画布元素"和"关卡设置, 可以省略(省略后将使用默认设置)"
  hg = new HardestGame(document.getElementById("gameStage"), GAMEMODE);
  //游戏成功过关
  hg.levelSuccessHandle = function () {
    if (hg.level < 4) {
      playAudioInWechat($("#success_audio").get(0));
      document.getElementById("currentLevel").getElementsByTagName("span")[0].innerHTML = hg.level;

      setTimeout(() => {
        hg.gameContinue(true);
      }, 2000)

    } else {
      var level = hg.level - 1

      var audio = document.getElementById('back_music');
      audio.pause();
      playAudioInWechat($("#gameSuccess_audio").get(0));
      $("#app").addClass("blur")
      $("#gameSuccessBox").css("display", "block")
    }
  }

  //游戏失败结束
  hg.gameOverHandle = function () {

    hg.gamePause()

    var audio = document.getElementById('back_music');
    audio.pause();
    playAudioInWechat($("#gameFail_audio").get(0));
    $("#gameOverBox").css("display", "block");
    $("#app").addClass("blur");
    var level = this.level;

    var goldObject = {
      '1': 100,
      '2': 200
    }
    if (level > 1) {
      $('#not-tips').hide()
      $('#fail-tips').show()
      $('.level-tips-num').hide()
      $('#level-tips-' + (level - 1)).show()
      $('#reward-gold-num').text(goldObject[level - 1])
    } else {
      $('#fail-tips').hide()
      $('#not-tips').show()
    }

    // console.log(111,this.level);
  }
  //初始化游戏
  hg.init();
  hg.canvas.parentNode.style.width = hg.canvas.width + "px";
  hg.canvas.parentNode.style.height = hg.canvas.height + "px";
  //游戏开始
  hg.gameStart(level);
  document.getElementById("currentLevel").getElementsByTagName("span")[0].innerHTML = hg.level;
  return true;
}

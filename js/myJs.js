const textConfig = {
  text1: "Happy Valentine!!!",
  text2: "Round 2 nào!! Này nghiêm túc này!",
  text3: "Kiệt thích MP không??",
  text4: "Lần này để Kiệt trả lời thật lòng này! Nghiêm túc, không đùa!",
  text5: "Không/Không muốn trả lời!",
  text6: "Thích! Thích lắm luôn!",
  text7: "Ơ, thích MP sao lại không nói! Ngộ ghê! Thế thích MP chỗ nào nè?",
  text8: "Send MP the Confession",
  text9: "Tại MP dễ thương nè, hát hay, học giỏi, lại còn giỏi nói chuyện nữa nè!",
  text10: "Woahhh! Thế sao không nói sớm, MP cũng thích Kiệt lắm luôn 10/10",
  text11: "P.S: Thích nha, không phải yêu, Kiệt đừng có tưởng bở nha! Miễn cưỡng vẫn có thể cho bạn thích MP á",
  text12: "Valentine vui vẻ, Kiệt!!",
};

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    Swal.fire({
      title: textConfig.text7,
      html: true,
      width: 900,
      padding: "3em",
      html: "<input type='text' class='form-control' id='txtReason'  placeholder='Whyyy'>",
      background: '#fff url("img/iput-bg.jpg")',
      backdrop: `
                    rgba(400,0,123,0.4)
                    url("img/inlove.gif")
                    left top
                    no-repeat
                  `,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text8,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          width: 900,
          confirmButtonText: textConfig.text12,
          background: '#fff url("img/iput-bg.jpg")',
          backdrop: `
                    rgba(400,800,123,0.4)
                    url("img/inlove3.gif")
                    right top
                    no-repeat
                  `,
          title: textConfig.text10,
          text: textConfig.text11,
          confirmButtonColor: "#83d0c9",
          onClose: () => {
            window.location = "https://mindyp10101.github.io/Fun/";
          },
        });
      }
    });

    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
});

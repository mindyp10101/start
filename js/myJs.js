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

function autoplayUnlock(element) {
    var context = new (window.AudioContext || window.webkitAudioContext)();

    return new Promise(function (resolve, reject) {
        if (context.state === 'suspended') {
            var unlock = function unlock() {
                context.resume()
                    .then(function () {
                        window.removeEventListener('keydown', unlock);
                        element.removeEventListener('click', unlock);
                        element.removeEventListener('touchstart', unlock);
                        element.removeEventListener('touchend', unlock);

                        resolve();
                    }).catch(function (error) {
                        reject(error);
                    });
            };

            window.addEventListener('keydown', unlock, false);
            element.addEventListener('click', unlock, false);
            element.addEventListener('touchstart', unlock, false);
            element.addEventListener('touchend', unlock, false);
        } else {
            resolve();
        }
    });
}
if(confirm("Sure you want to close the window");
{
     // yes return to submit function
}
else
{
  // no return to Other call function
}

window.onclose = function()
{
  alert('yes');
}

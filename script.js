function openMessageBoxInNewTab(boxId) {
    var newWindow = window.open('', '_blank');
    newWindow.document.write('<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>body{background-color: #333;color: #fff;font-family: \'Arial\', sans-serif;margin: 0;padding: 20px;}h1{font-size: 2em;margin-bottom: 10px;}p{font-size: 1.2em;}</style><title>Message Box</title></head><body><h1>Message Box</h1>');
    
    if (boxId === 'loveBox' || boxId === 'missBox' || boxId === 'sorryBox') {
      newWindow.document.write('<div class="message-box">');
      newWindow.document.write('<p>HAMARE FEELINGS DEKHNE KE LIYE NICHE KA BUTTON CLICK KARE</p>');
      newWindow.document.write('<button onclick="showMessage(\'' + boxId + '\')">Show Message</button>');
      newWindow.document.write('</div>');
    } else {
      var selectedBoxContent = document.getElementById(boxId).innerHTML;
      newWindow.document.write('<div class="message-box">' + selectedBoxContent + '</div>');
    }
  
    newWindow.document.write('</body><script>function showMessage(boxId) { if (boxId === \'loveBox\') { document.querySelector(".message-box").innerHTML = "<p>As salam aliakum! I love you jannu! Sabse phele shulriya yeh open karne aur hum apse Bohat pyaar karte hai hamesha saath rahunga likhna bohaat hai par kya karuu neend arii nd itti mehanat karaa hoon thak gaya hoon par jo kuch kara hai apke liye hai this is my first fully developed website only for you princess umaahhh(KASH EMOJIS DAAL SAKTA).</p>"; } else if (boxId === \'missBox\') { document.querySelector(".message-box").innerHTML = "<p>I miss you! i am really missing you badly jannu bohaat yaad aari(RONE KI EMOJI)</p>"; } else { document.querySelector(".message-box").innerHTML = "<p>I am really sorry hafsa jo aaj tak karaa sab ke liye malum hasti ki itaa bolne website ich bana dala par mujhe kuch unique karna tha,mein hamesha tere saath rehtu januu forever! AB PLEASEEE MAAF KAR MANN JAA JANNU --WITH LOTS OF LOVE ENDING THIS YOURS ALFAZ KALADAGI UMMAH!!</p>"; } }</script></html>');
    newWindow.focus();
  }
  
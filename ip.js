var os = require('os');
var ifaces = os.networkInterfaces();
var ip = "Hey there"

var Lcd = require('lcd');
  lcd = new Lcd({
    rs: 12,
    e: 21,
    data: [5, 6, 17, 18],
    cols: 8,
    rows: 2
  });

lcd.on('ready', function() {
  lcd.setCursor(16, 0);
  lcd.autoscroll();
  Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0;

  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }
      // this interface has only one ipv4 adress
      ip =  iface.address + ":8080"
        print("Please visit " + ip + " Thankyou.!  ")
console.log(ip)
    ++alias;
  });
});
});

function print(str, pos) {
  pos = pos || 0;

  if (pos === str.length) {
    pos = 0;
  }

  lcd.print(str[pos]);

  setTimeout(function() {
    print(str, pos + 1);
  }, 300);
}

// If ctrl+c is hit, free resources and exit.
process.on('SIGINT', function() {
  lcd.clear();
  lcd.close();
  process.exit();
});


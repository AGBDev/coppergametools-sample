const Console = Engine.Console;

HandleArgs = function (args) {
  for (var i = 0; i < args.length; i++) {
    switch (args[i]) {
      case "--escclose":
        Engine.Common.CloseOnEscape(true);
        break;
      case "--devmode":
        Engine.Common.CleanMemory();
        break;
    }
  }
};

Main = function (args) {
  Engine.Common.SetVariable("game_paused", "false");
  HandleArgs(args);

  Engine.Event.RegistFrameEvent(function(){
    var num = 0;
    Engine.IO.File.WriteAllText("Data/tmp_data_"+num, num * 234);
    num++;
  });
};

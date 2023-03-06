const Console = Engine.Console;

HandleArgs = function (args) {
  for (var i = 0; i < args.length; i++) {
    switch (args[i]) {
      case "--escclose":
        Engine.Common.CloseOnEscape(true);
        break;
      case "--devmode":
        Engine.Common.CleanMemory();
        //Engine.IO.File.WriteAllText("~content/temp_config.gcf", "dev=1");
        break;
    }
  }
};

Main = function (args) {
  Engine.Common.SetVariable("game_paused", "false");

  HandleArgs(args);
  Console.Print("Starting");
};

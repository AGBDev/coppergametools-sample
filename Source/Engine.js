Engine = {};
Engine.Scene = {};
Engine.Console = {};
Engine.Common = {};
Engine.IO = {};
Engine.IO.File = {};
Engine.Networking = {};
Engine.Event = {};

// MODULE: Engine.Scene

Engine.Scene.CloneNode = function(nodeToClone) {
	return ccbCloneSceneNode(nodeToClone);
};

Engine.Scene.RemoveNode = function(nodeToDelete) {
	ccbRemoveSceneNode(nodeToDelete);
};

Engine.Scene.NodeByName = function(name) {
	return ccbGetSceneNodeFromName(name);
};

Engine.Scene.SetNodeProp = function(node, propToSet, value) {
	ccbSetSceneNodeProperty(node, propToSet, value);
};

Engine.Scene.GetNodeProp = function(node, propToGet) {
	return String(ccbGetSceneNodeProperty(node, propToGet));
};

// MODULE: Engine.Console

/**
 * Prints a message to the Debug Console.
 */
Engine.Console.Print = function(messageToPrint) {
	print(messageToPrint);
};

Engine.Console.Clear = function() {
	for (var index = 0; index < 10; index++) {
		this.Print("\n");
	}
};

// MODULE: Engine.Util.Common

Engine.Common.SetVariable = function (name, value) {
	ccbSetCopperCubeVariable(name, value);
};

Engine.Common.GetVariable = function (name) {
	return String(ccbGetCopperCubeVariable(name));
};

/**
 * Forcefuly quits the game.
 */
Engine.Common.ForceQuit = function() {
	ccbEndProgram();
};

/**
 * Takes a screenshot of the current frame and saves it to a file.
 * @param filename Path and file to where the screenshot should the saved to.
 */
Engine.Common.TakeScreenshot = function(filename) {
	ccbSaveScreenshot(filename);
};

/**
 * Cleans up current memory usage.
 * Tries to free up as much memory as possible by freeing 
 * up unused textures, vertex and index buffers etc.
*/
Engine.Common.CleanMemory = function() {
	ccbCleanMemory();
};

Engine.Common.CloseOnEscape = function(bool) {
	ccbSetCloseOnEscapePressed(bool);
};

// MODULE: Engine.Util.IO

Engine.IO.File.ReadAllText = function (path) {
	return ccbReadFileContent(path)
};

Engine.IO.File.WriteAllText = function (path, content) {
	ccbWriteFileContent(path, content);
};

Engine.IO.File.Delete = function (path) {
	ccbFileDelete(path);
};

Engine.IO.File.Exists = function (path) {
	return ccbFileExist(path);
};

Engine.IO.File.AppendText = function (path, contentToAppend) {
	this.WriteAllText(path, this.ReadAllText(path) + contentToAppend);
};

// MODULE: Engine.Util.Networking

Engine.Networking.StartNetRequest = function(url, callback) {
	return Number(ccbDoHTTPRequest(url, callback));
};

Engine.Networking.CancelNetRequest = function(connectionId) {
	ccbCancelHTTPRequest(connectionId);
};

// MODULE: Engine.Util.Event

Engine.Event.RegistFrameEvent = function(func) {
	ccbRegisterOnFrameEvent(func);
};

Engine.Event.UnRegistFrameEvent = function(func) {
	ccbUnregisterOnFrameEvent(func);
};

Engine.Event.RegistKeyDownEvent = function(funcString) {
	ccbRegisterKeyDownEvent(funcString);
};

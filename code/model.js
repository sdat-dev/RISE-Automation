const RISEModel = {};

//add paths where you want to store below pages
RISEModel.outputPaths = {
  programsFolder: "",
  speakersFolder: "",
  agenda1: "",
  agenda2: "",
  agenda3: "",
  targetlocationFolder: "../output",
  targetAgendaLocationFolder: "../output"
  //targetlocationFolder: "C:/Users/AT989579/Documents/RISE Git/",
  //targetAgendaLocationFolder:
    //"C:/Users/AT989579/OneDrive - University at Albany - SUNY/1Office Work files/work/Rise 2019/Rise-Local/"
};

RISEModel.inputPaths = {
  imageFolderLocation: "https://sdat-dev.github.io/RISE/img/Speakers/",
  //   targetlocationFolder: "C://Users/AT989579/Documents/RISE Git/",
  excelfilepath: "../data/Master Contact List.xlsx",
  programTemplatePath: "../templates/rise-session-template.html",
  speakerTemplate: "../templates/speaker_template.html",
  riseAllSpeakers: "../templates/rise-speakers-template.html",
  agendaTemplatepath: "../templates/"
};

module.exports.RISEModel = RISEModel;

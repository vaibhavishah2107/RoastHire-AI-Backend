async function uploadResume(req, res) {
  try {
    console.log(req.file);
    return res.status(200).json({
      success: true,
      message: "Resume uploaded successfully.",
      file: req.file.filename,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      succcess: false,
      message: "Internal server Error",
    });
  }
}

module.exports = uploadResume;

/**
 * HomeController
 *
 * @description :: Server-side logic for managing Homes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  folder : function (req, res) {

    res.view('homepage', {
      config : sails.config.stylex,
      menu : StyleX.getSections(),
      elements : StyleX.getAllFrom(req.param('folder') || 'elements')
    });

  }

};


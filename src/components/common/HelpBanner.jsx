import React from 'react';
import PropTypes from 'prop-types';
import toggleHelp from '../../utils/toggleHelp';

const HelpBanner = () => {
  return (
    <div id="help-panel" className="panel panel-info" onClick={toggleHelp}>
      <div className="panel-heading">
        <h4 className="panel-title collapsed">
          Help
        </h4>
      </div>
      <div id="collapseHelp" className="panel-collapse collapse">
        <div className="panel-body">
          <p>To claim an item, simply click or tap the name of the item. This will mark it as claimed and prevent others from buying the same gift.</p>
          <p>If you have claimed an item by mistake, click or tap it again, and confirm in the prompt that you wish to mark the item as available again.</p>
        </div>
      </div>
    </div>
  );
}

HelpBanner.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default HelpBanner;

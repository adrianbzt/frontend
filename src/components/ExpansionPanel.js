import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Filters from './Filters';
import Table from './Table';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

class SimpleExpansionPanel extends React.Component {
  
  render() {
    return (
      <div className={this.props.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={this.props.heading}>Filters</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Filters/>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={this.props.heading}>Results</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Table/>
          </ExpansionPanelDetails>
        </ExpansionPanel>      
      </div>
    );
  }

}

// SimpleExpansionPanel.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// function SimpleExpansionPanel(props) {

//   const { classes } = props;
//   return (
//     <div className={classes.root}>
//       <ExpansionPanel>
//         <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//           <Typography className={classes.heading}>Filters</Typography>
//         </ExpansionPanelSummary>
//         <ExpansionPanelDetails>
//           <Filters/>
//         </ExpansionPanelDetails>
//       </ExpansionPanel>
//       <ExpansionPanel>
//         <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//           <Typography className={classes.heading}>Results</Typography>
//         </ExpansionPanelSummary>
//         <ExpansionPanelDetails>
//           <Table/>
//         </ExpansionPanelDetails>
//       </ExpansionPanel>      
//     </div>
//   );
// }

// SimpleExpansionPanel.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(SimpleExpansionPanel);

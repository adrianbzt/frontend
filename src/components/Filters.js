import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

class TextFields extends React.Component {
  state = {
    name: '',
    email: '',
    id: '',
    offset: '',
    limit: ''

  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });  
  };

  handleChange = email => event => {
    this.setState({
      [email]: event.target.value,
    });
  };

  handleChange = id => event => {
    this.setState({
      [id]: event.target.value,
    });
  };

  handleChange = limit => event => {
    this.setState({
      [limit]: event.target.value,
    });
  };
  
  handleChange = offset => event => {
    this.setState({
      [offset]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}          
        />
        <TextField
          id="email"
          label="Email"
          className={classes.textField}
          value={this.state.email}
          onChange={this.handleChange('email')}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}          
        />
        <TextField
          id="identifier"
          label="Id"
          className={classes.textField}
          value={this.state.id}
          onChange={this.handleChange('id')}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />   
        <TextField
          id="limit"
          label="Limit"
          className={classes.textField}
          value={this.state.limit}
          onChange={this.handleChange('limit')}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        /> 
        <TextField
          id="offset"
          label="Offset"
          className={classes.textField}
          value={this.state.offset}
          onChange={this.handleChange('offset')}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />                      
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);

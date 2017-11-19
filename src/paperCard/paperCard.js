// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon  from 'material-ui-icons/Menu';
import classNames from 'classnames';

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
    }),
});

function PaperSheet(props) {
    const { classes } = props;
    return (
        <div>
            <Paper className={classes.root} elevation={4}>
                <Typography type="headline" component="h3">
                    <IconButton color="accent" aria-label="add" >
                        <MenuIcon  />
                    </IconButton><span style={{float:"right"}}> The best dinner EVER</span>
                </Typography>
                <Typography type="body1" component="p">
                    <ol>
                        <li>
                            Here's what you are going to do.....
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper nisl at ex aliquet sollicitudin. Nam fermentum est et tincidunt imperdiet. Pellentesque volutpat sit amet elit sed placerat. Suspendisse potenti. Suspendisse volutpat nec neque eu placerat. Praesent hendrerit lacus ac fringilla accumsan. Quisque maximus tortor eu libero fringilla bibendum. Quisque faucibus lacus quis tincidunt cursus. Nam molestie fringilla metus, quis luctus lacus fringilla in. Quisque ac elit ipsum. Donec aliquam nibh nisl, ut venenatis lacus ultrices sit amet. Sed felis lacus, fringilla id mi sit amet, eleifend vehicula lectus. Mauris ac venenatis magna, ac euismod dolor.
                        </li>
                        <li>
                            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin gravida enim libero, eget porttitor odio porta vitae. Phasellus pulvinar mauris sapien, id sollicitudin elit lobortis ac. Sed tempus, mi quis egestas scelerisque, eros dolor dictum dolor, eu mollis mi nisl a nulla. Aliquam justo est, dictum et erat luctus, aliquet vehicula felis. Proin quis tincidunt nisl. Sed eget mi quis velit facilisis tempor et eu orci. Vivamus iaculis nisi at venenatis hendrerit. Aliquam efficitur iaculis metus ut mollis. Phasellus commodo rutrum tincidunt. Suspendisse finibus lorem leo, id sagittis quam tempor a. Quisque placerat tortor eget nisi viverra tincidunt. Nullam a neque nisi. Donec viverra quis metus rutrum rhoncus. Donec posuere, purus convallis dapibus mattis, lorem urna iaculis eros, et interdum nunc ipsum vel urna.
                        </li>
                        <li>
                            Aliquam erat volutpat. Proin laoreet venenatis libero, et sodales nulla tempor sit amet. Etiam ornare egestas turpis. Fusce vel imperdiet magna. Integer sagittis elementum odio a dictum. Vivamus nec libero magna. Aenean luctus tellus at libero rhoncus, quis auctor massa luctus. Vivamus nunc sem, interdum eu orci vel, lacinia finibus massa. Fusce a fringilla enim. Mauris dictum vehicula ligula, id facilisis justo congue at. Nunc non sem nulla. Mauris finibus vitae urna eget rutrum. Nulla facilisi. Nunc aliquam sed tortor et rutrum.
                        </li>
                        <li>
                            Fusce metus dolor, faucibus nec euismod et, malesuada at mauris. Maecenas ut risus tristique, mattis nibh eget, maximus est. Sed ut mauris eu ipsum vehicula varius id non elit. Integer id ultricies dolor. Nam aliquam nec quam quis aliquam. Vestibulum a aliquam dolor. Suspendisse maximus leo ipsum, vel pellentesque nisi semper in. Nullam turpis risus, condimentum ac diam vitae, rhoncus consequat neque. Nunc velit orci, blandit eu diam a, maximus condimentum mi. Integer elementum, sapien vitae pulvinar ultrices, nibh enim aliquam sem, in blandit dui purus vel odio. Aenean vitae nulla non tortor convallis vestibulum non bibendum arcu. Sed vehicula tellus at mattis egestas. Suspendisse volutpat metus quam, id dapibus massa dapibus vel. Praesent ultrices augue id viverra cursus. Duis ultrices suscipit bibendum. Integer blandit, massa at ornare tincidunt, lorem odio vestibulum orci, sed egestas odio velit id sapien.
                        </li>
                   </ol>
                </Typography>
            </Paper>
        </div>
    );
}

PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
import React, {Component} from 'react';
import classNames from 'classnames';
import {withStyles} from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Tabs from 'material-ui/Tabs';
import Tab from 'material-ui/Tabs/Tab';
import List from 'material-ui/List';

import Hidden from 'material-ui/Hidden';

import withAuthorization from '../../components/withAuthorization';
import withRoot from '../../components/withRoot';

import SimpleSnackbar from '../../widgets/snackBar';
import AlertDialog from '../../widgets/alert'

import {mailFolderListItems, otherMailFolderListItems} from '../../components/tileData';
import {CategoryConfig} from '../../constants/CategoryConfig';

import {uploadStyles} from '../../styles/uploadPage';
import tabStyle from '../../styles/tab';

import UploadPanel from '../../components/UploadPanel';

class UploadOccasionsCardsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            uploading: false,
            open: false,
            activeTabIndex: 0,
            imageCategory: 'cards',
            activeTab: 'anniversary',
            mobileOpen: false,
        };
    }

    handleChange = (event, value) => {
        this.setState({open: false});
        let tabs = CategoryConfig.cards.occasions;
        for (let tab of tabs) {
            let tabValue = tabs[value];
            if (tab == tabValue) {
                console.log('tab is ', tab)
                this.setState({activeTabIndex: value, activeTab: tab})
            }

        }
        // this.setState({activeTabIndex: value});
    };

    handleDrawerToggle = () => {
        this.setState({mobileOpen: !this.state.mobileOpen});
    };
    handleUploadStatus = (status) => {
        this.setState({open: status.open, uploading: status.uploading, error: status.error});
    }

    render() {
        const {classes} = this.props;
        let tabs = CategoryConfig.cards.occasions;
        let tabsName = tabs.map((tab) => {
            return tab.replace(/([a-z])([A-Z])/g, '$1 $2');

        });
        console.log('############## tabsName is :', tabsName)

        const drawer = (
            <div>
                <div className={classes.toolbar}/>
                <Divider />
                <List>{mailFolderListItems}</List>
                <Divider />
                <List>{otherMailFolderListItems}</List>
            </div>
        );

        return (
            <div className={classes.root}>

                <div className={classes.appFrame}>
                    <AppBar className={classNames(classes.appBar, classes[`appBar-left`])}>
                        <Toolbar>
                            <Typography variant="title" color="inherit" noWrap>
                                Upload images of Occasions Cards for {this.state.activeTab}
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Hidden mdUp>
                        <Drawer
                            variant="temporary"
                            open={this.state.mobileOpen}
                            onClose={this.handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden smDown implementation="css">
                        <Drawer
                            variant="permanent"
                            open
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <main className={classes.content}>
                        <SimpleSnackbar show={this.state.uploading}/>
                        <AlertDialog open={this.state.open} error={this.state.error}/>
                        <Paper>
                            <Tabs
                                value={this.state.activeTabIndex}
                                indicatorColor="primary"
                                textColor="primary"
                                onChange={this.handleChange}
                            >
                                {tabsName.map((tab, index) => {
                                    return (
                                        <Tab label={tab} key={index} style={tabStyle.title}/>
                                    )
                                })}

                            </Tabs>

                        </Paper>
                        <UploadPanel classes={classes} imageCategory={this.state.imageCategory}
                                     activeTabIndex={this.state.activeTabIndex} activeTab={this.state.activeTab}
                                     onHandleUploadStatus={this.handleUploadStatus}
                        />
                    </main>
                </div>
            </div>
        );


    }
}


const authCondition = (authUser) => !!authUser;


UploadOccasionsCardsPage = withRoot(withStyles(uploadStyles)(UploadOccasionsCardsPage));
export default withAuthorization(authCondition)(UploadOccasionsCardsPage);

import React  from 'react';
import {
    Link
} from 'react-router-dom';
import ListItem from 'material-ui/List/ListItem';
import ListItemIcon from 'material-ui/List/ListItemIcon';
import ListItemText from 'material-ui/List/ListItemText';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';
import MailIcon from 'material-ui-icons/Mail';
import DeleteIcon from 'material-ui-icons/Delete';
import ReportIcon from 'material-ui-icons/Report';
import CalendarIcon from 'material-ui-icons/PermContactCalendar'
import ThumbUpIcon from 'material-ui-icons/ThumbUp';
import MoodIcon from 'material-ui-icons/Mood';
import UpdateIcon from 'material-ui-icons/Update';
import AnnouncementIcon from 'material-ui-icons/Announcement';
export const mailFolderListItems = (
    <div>
        <ListItem component={Link} to="upload-holidayCards" button>
            <ListItemIcon>
                <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Holiday Cards"/>
        </ListItem>
        <ListItem component={Link} to="upload-birthdayCards" button>
            <ListItemIcon>
                <StarIcon />
            </ListItemIcon>
            <ListItemText primary="Birthday Cards"/>
        </ListItem>
        <ListItem component={Link} to="upload-thankyouCards" button>
            <ListItemIcon>
                <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Thank You Cards"/>
        </ListItem>
        <ListItem component={Link} to="upload-occasionsCards" button>
            <ListItemIcon>
                <CalendarIcon />
            </ListItemIcon>
            <ListItemText primary="Occasions Cards"/>
        </ListItem>
        <ListItem component={Link} to="upload-congratulationsCards" button>
            <ListItemIcon>
                <ThumbUpIcon />
            </ListItemIcon>
            <ListItemText primary="Congratulations Cards"/>
        </ListItem>
        <ListItem component={Link} to="upload-thoughtsFeelingsCards" button>
            <ListItemIcon>
                <MoodIcon />
            </ListItemIcon>
            <ListItemText primary="ThoughtsFeelings Cards"/>
        </ListItem>
    </div>
);

export const otherMailFolderListItems = (
    <div>
        <ListItem component={Link} to="upload-holidayInvitations" button>
            <ListItemIcon>
                <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Holiday Invitations"/>
        </ListItem>
        <ListItem component={Link} to="upload-birthdayInvitations" button>
            <ListItemIcon>
                <DeleteIcon />
            </ListItemIcon>
            <ListItemText primary="Birthday Invitations"/>
        </ListItem>
        <ListItem component={Link} to="upload-weddingInvitations" button>
            <ListItemIcon>
                <ReportIcon />
            </ListItemIcon>
            <ListItemText primary="Wedding Invitations"/>
        </ListItem>
        <ListItem component={Link} to="upload-partyInvitations" button>
            <ListItemIcon>
                <UpdateIcon />
            </ListItemIcon>
            <ListItemText primary="Party Invitations"/>
        </ListItem>
        <ListItem component={Link} to="upload-announcementInvitations" button>
            <ListItemIcon>
                <AnnouncementIcon />
            </ListItemIcon>
            <ListItemText primary="Announcement Invitations"/>
        </ListItem>
    </div>
);

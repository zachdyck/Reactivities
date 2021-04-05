import React from 'react';
import { act } from 'react-dom/test-utils';
import { Button, Card, Icon, Image } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import ActivityList from '../dashboard/ActivityList';

interface Props {
    activity: Activity;
    cancelSelectActivity: () => void;
}

export default function ActivityDetails({activity, cancelSelectActivity}: Props) {
    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button basic color='blue'>Edit</Button>
                    <Button onClick={cancelSelectActivity} basic color='grey'>Cancel</Button>
                </Button.Group>
            </Card.Content>
        </Card>
    )
}
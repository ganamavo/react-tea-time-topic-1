import React from 'react';
import Form from './Form' 

export default function AddTopics({topics, setTopics}) { 
    const handleSubmit = e => {
        e.preventDefault();
        let newTopicValue = e.currentTarget.topic.value;
        let newTopic = createNewTopic(newTopicValue);
        topics.push(newTopic);
        setTopics([...topics]) 
        e.currentTarget.topic.value= "";
    };

    const createNewTopic = title => {
        return {
            upvotes: 0,
            downvotes: 0,
            disussedOn: '',
            title: title,
            id: Date.now(),
        };
    };
    

return(
    <Form handleSubmit={handleSubmit} topics={topics}/>
)
}
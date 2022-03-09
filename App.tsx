import axios from 'axios';
import React, {useCallback, useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import format from 'date-fns/format';
import styles from './styles';
import Compose from './components/compose';

interface IChatRow {
  createdAt: Date;
  avatar: string;
  body: string;
  user: string;
  username: string;
  id: string;
  type?: 'sent' | 'received';
}

const ChatRow = ({
  createdAt,
  avatar,
  body,
  user,
  username,
  id,
  type = 'received',
}: IChatRow) => {
  return (
    <View style={[styles.chatRow]}>
      <View>
        <Image
          style={styles.avatar}
          source={{
            uri: avatar,
          }}
        />
      </View>
      <View
        style={[
          styles.chatBox,
          type === 'sent' ? styles.sent : styles.recieved,
        ]}>
        <View style={styles.rowSpaceBetween}>
          <Text style={styles.author}>{username}</Text>
          <Text style={styles.time}>
            {format(new Date(createdAt), 'h:mm a')}
          </Text>
        </View>
        <Text style={styles.text}>{body}</Text>
      </View>
    </View>
  );
};

const App = () => {
  const [messages, setMessages] = useState<IChatRow[]>([]);
  const [input, setInput] = useState('');
  const [fetching, setFetching] = useState(false);
  const [page, setPage] = useState(1);

  const fetchMessages = (pageNumber: number, limit: number) => {
    return axios
      .get(
        `https://620120b1fdf5090017249868.mockapi.io/api/v1/messages?page=${pageNumber}&limit=${limit}`,
      )
      .then(res => {
        return res.data;
      });
  };

  useEffect(() => {
    const getChats = async () => {
      setFetching(true);
      try {
        const response = await fetchMessages(page, 10);
        if (page > 1) {
          setMessages(v => [...v, ...response]);
        } else {
          setMessages(response);
        }
        setFetching(false);
      } catch (error) {
        setFetching(false);
      }
    };
    getChats();
  }, [page]);

  const updateInput = (text: string) => {
    setInput(text);
  };

  const postMessage = () => {
    const data: IChatRow = {
      createdAt: new Date(),
      avatar: 'https://avatars.githubusercontent.com/u/14913673?v=4',
      body: input,
      user: `9e722f33-52c1-4426-9e21-${new Date()}`,
      username: 'Emmanuel.Akinde',
      id: '4',
      type: 'sent',
    };
    setMessages(v => [data, ...v]);
    updateInput('');
  };

  const fetchMoreData = () => {
    if (!fetching) {
      setPage(v => v + 1);
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{backgroundColor: '#141A22', flex: 1}}>
        <StatusBar barStyle={'light-content'} />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.chatContainer}>
          <FlatList
            data={messages}
            renderItem={({item}) => <ChatRow {...item} />}
            keyExtractor={item => `${item.user}-${item.id}`}
            inverted
            onEndReachedThreshold={0.2}
            onEndReached={fetchMoreData}
          />
          <Compose
            updateInput={updateInput}
            send={() => postMessage()}
            value={input}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default App;

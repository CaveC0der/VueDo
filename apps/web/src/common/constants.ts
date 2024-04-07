import type { TodoList } from '@/types/models/TodoList';
import type { TodoItem } from '@/types/models/TodoItem';

export const STATIC_ASSETS_URL = `${import.meta.env.VITE_BACKEND_URL}/static`;

export const NOTIFICATION_TIMEOUT = 3000;

export const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut est felis, facilisis quis sollicitudin vitae, eleifend ac nibh. Vestibulum a nibh efficitur, condimentum dolor sed, commodo dui. Donec vel metus et purus rutrum iaculis id sed nisi. Curabitur porta ultricie iaculis. Integer eget lectus efficitur diam malesuada cursus sit amet vel lorem. Mauris in varius mi. Vivamus a ultrices felis. Suspendisse id vestibulum erat. Quisque convallis, odi non rutrum volutpat, nulla erat iaculis nunc, at congue lacus erat in nunc. Praesent malesuada vestibulum congue. Sed pharetra posuere tempus.';

export const fakeTodoLists: TodoList[] = [
  {
    id: '1',
    userId: '1',
    title: 'Lorem Ipsum 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum risus vel lectus sodales vehicula.',
    createdAt: new Date('2024-03-31T08:00:00Z'),
    updatedAt: new Date('2024-03-31T12:30:00Z'),
  },
  {
    id: '2',
    userId: '1',
    title: 'Lorem Ipsum 2',
    description:
      'Pellentesque euismod urna id magna cursus, id facilisis metus consectetur. Nunc vitae arcu nunc.',
    createdAt: new Date('2024-03-30T15:00:00Z'),
    updatedAt: new Date('2024-03-30T15:30:00Z'),
  },
  {
    id: '3',
    userId: '1',
    title: 'Lorem Ipsum 3',
    description:
      'Nullam nec odio sit amet nibh vestibulum bibendum. Maecenas blandit accumsan ligula vel commodo.',
    createdAt: new Date('2024-03-29T10:00:00Z'),
    updatedAt: new Date('2024-03-29T10:05:00Z'),
  },
  {
    id: '4',
    userId: '1',
    title: 'Lorem Ipsum 4',
    description:
      'Fusce dapibus justo in ornare auctor. Duis vehicula elit in justo euismod, nec vehicula lorem condimentum.',
    createdAt: new Date('2024-03-28T09:00:00Z'),
    updatedAt: new Date('2024-03-28T09:15:00Z'),
  },
  {
    id: '5',
    userId: '1',
    title: 'Lorem Ipsum 5',
    description:
      'Vivamus sit amet nisi sit amet odio ultricies auctor. Donec sit amet nisl eu ex malesuada elementum.',
    createdAt: new Date('2024-03-27T12:00:00Z'),
    updatedAt: new Date('2024-03-27T12:30:00Z'),
  },
  {
    id: '6',
    userId: '1',
    title: 'Lorem Ipsum 6',
    description:
      'Etiam eu lacus eget magna iaculis facilisis non a enim. Sed vehicula erat ut justo sodales.',
    createdAt: new Date('2024-03-26T14:00:00Z'),
    updatedAt: new Date('2024-03-26T14:20:00Z'),
  },
  {
    id: '7',
    userId: '1',
    title: 'Lorem Ipsum 7',
    description:
      'Aliquam non purus vel justo bibendum pellentesque. Phasellus sit amet elit non dui pharetra commodo.',
    createdAt: new Date('2024-03-25T16:00:00Z'),
    updatedAt: new Date('2024-03-25T16:10:00Z'),
  },
  {
    id: '8',
    userId: '1',
    title: 'Lorem Ipsum 8',
    description:
      'Morbi auctor nisi vitae purus tincidunt, vitae malesuada elit sagittis. Nunc pharetra urna auctor ultricies.',
    createdAt: new Date('2024-03-24T18:00:00Z'),
    updatedAt: new Date('2024-03-24T18:25:00Z'),
  },
  {
    id: '9',
    userId: '1',
    title: 'Lorem Ipsum 9',
    description:
      'Integer et nisl et eros commodo mattis. Fusce vitae enim euismod, feugiat nisi vel, consequat ipsum.',
    createdAt: new Date('2024-03-23T20:00:00Z'),
    updatedAt: new Date('2024-03-23T20:35:00Z'),
  },
  {
    id: '10',
    userId: '1',
    title: 'Lorem Ipsum 10',
    description:
      'Curabitur id sem nec ex feugiat sodales ut non mi. Vestibulum auctor dolor nec suscipit aliquam.',
    createdAt: new Date('2024-03-22T22:00:00Z'),
    updatedAt: new Date('2024-03-22T22:40:00Z'),
  },
  {
    id: '11',
    userId: '1',
    title: 'Lorem Ipsum 11',
    description:
      'Nam eget turpis nec elit laoreet tempus sed vitae eros. Curabitur commodo lorem at lacus maximus, vitae congue quam cursus.',
    createdAt: new Date('2024-03-21T08:00:00Z'),
    updatedAt: new Date('2024-03-21T08:45:00Z'),
  },
  {
    id: '12',
    userId: '1',
    title: 'Lorem Ipsum 12',
    description:
      'Suspendisse potenti. Aenean a felis sit amet mauris lacinia vulputate. Integer at turpis ut nulla tristique egestas.',
    createdAt: new Date('2024-03-20T10:00:00Z'),
    updatedAt: new Date('2024-03-20T10:50:00Z'),
  },
  {
    id: '13',
    userId: '1',
    title: 'Lorem Ipsum 13',
    description:
      'Duis vitae velit nec dolor cursus egestas. Sed vel justo nec orci ultrices eleifend non in velit.',
    createdAt: new Date('2024-03-19T12:00:00Z'),
    updatedAt: new Date('2024-03-19T12:55:00Z'),
  },
  {
    id: '14',
    userId: '1',
    title: 'Lorem Ipsum 14',
    description:
      'Vestibulum varius turpis vel enim ultrices, id scelerisque metus malesuada. Phasellus sed lectus auctor, dignissim purus vitae, sodales nulla.',
    createdAt: new Date('2024-03-18T14:00:00Z'),
    updatedAt: new Date('2024-03-18T14:58:00Z'),
  },
  {
    id: '15',
    userId: '1',
    title: 'Lorem Ipsum 15',
    description:
      'Nunc quis ex non quam cursus euismod. Donec nec neque eu odio consequat euismod nec ut metus.',
    createdAt: new Date('2024-03-17T16:00:00Z'),
    updatedAt: new Date('2024-03-17T16:30:00Z'),
  },
  {
    id: '16',
    userId: '1',
    title: 'Lorem Ipsum 16',
    description:
      'Aliquam erat volutpat. Sed eget urna eget libero tincidunt fermentum. Vestibulum luctus ligula sed nunc commodo, sit amet rhoncus odio consequat.',
    createdAt: new Date('2024-03-16T18:00:00Z'),
    updatedAt: new Date('2024-03-16T18:40:00Z'),
  },
  {
    id: '17',
    userId: '1',
    title: 'Lorem Ipsum 17',
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam auctor orci sit amet nisi luctus, eu rhoncus turpis venenatis.',
    createdAt: new Date('2024-03-15T20:00:00Z'),
    updatedAt: new Date('2024-03-15T20:45:00Z'),
  },
  {
    id: '18',
    userId: '1',
    title: 'Lorem Ipsum 18',
    description:
      'Quisque lacinia arcu ac efficitur facilisis. Integer sit amet nisl ac justo dignissim interdum.',
    createdAt: new Date('2024-03-14T22:00:00Z'),
    updatedAt: new Date('2024-03-14T22:55:00Z'),
  },
  {
    id: '19',
    userId: '1',
    title: 'Lorem Ipsum 19',
    description:
      'Fusce vel arcu nec risus iaculis auctor nec a nunc. Nulla facilisi. Nam interdum nisi eu mi ultrices, ut faucibus neque posuere.',
    createdAt: new Date('2024-03-13T08:00:00Z'),
    updatedAt: new Date('2024-03-13T08:30:00Z'),
  },
  {
    id: '20',
    userId: '1',
    title: 'Lorem Ipsum 20',
    description:
      'Sed id urna a orci tristique pharetra. Integer a nisi nec risus scelerisque ultrices a ut ipsum.',
    createdAt: new Date('2024-03-12T10:00:00Z'),
    updatedAt: new Date('2024-03-12T10:20:00Z'),
  },
];

export const fakeTodoItems: TodoItem[] = [
  {
    id: '1',
    todoListId: '1',
    title: 'Task 1: Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum risus vel lectus sodales vehicula.',
    priority: 5,
    completed: false,
    createdAt: new Date('2024-03-31T08:00:00Z'),
    updatedAt: new Date('2024-03-31T12:30:00Z'),
  },
  {
    id: '2',
    todoListId: '1',
    title: 'Task 2: Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum risus vel lectus sodales vehicula.',
    priority: 5,
    completed: false,
    createdAt: new Date('2024-03-30T15:00:00Z'),
    updatedAt: new Date('2024-03-30T15:30:00Z'),
  },
  {
    id: '3',
    todoListId: '1',
    title: 'Task 3: Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum risus vel lectus sodales vehicula.',
    priority: 3,
    completed: false,
    createdAt: new Date('2024-03-29T10:00:00Z'),
    updatedAt: new Date('2024-03-29T10:05:00Z'),
  },
  {
    id: '4',
    todoListId: '1',
    title: 'Task 4: Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum risus vel lectus sodales vehicula.',
    priority: 3,
    completed: false,
    createdAt: new Date('2024-03-28T09:00:00Z'),
    updatedAt: new Date('2024-03-28T09:15:00Z'),
  },
  {
    id: '5',
    todoListId: '1',
    title: 'Task 5: Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum risus vel lectus sodales vehicula.',
    priority: 2,
    completed: false,
    createdAt: new Date('2024-03-27T12:00:00Z'),
    updatedAt: new Date('2024-03-27T12:30:00Z'),
  },
  {
    id: '6',
    todoListId: '1',
    title: 'Task 6: Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum risus vel lectus sodales vehicula.',
    priority: 4,
    completed: false,
    createdAt: new Date('2024-03-26T14:00:00Z'),
    updatedAt: new Date('2024-03-26T14:20:00Z'),
  },
  {
    id: '7',
    todoListId: '1',
    title: 'Task 7: Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum risus vel lectus sodales vehicula.',
    priority: 1,
    completed: false,
    createdAt: new Date('2024-03-25T16:00:00Z'),
    updatedAt: new Date('2024-03-25T16:10:00Z'),
  },
  {
    id: '8',
    todoListId: '1',
    title: 'Task 8: Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum risus vel lectus sodales vehicula.',
    priority: 4,
    completed: false,
    createdAt: new Date('2024-03-24T18:00:00Z'),
    updatedAt: new Date('2024-03-24T18:25:00Z'),
  },
  {
    id: '9',
    todoListId: '1',
    title: 'Task 9: Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum risus vel lectus sodales vehicula.',
    priority: 1,
    completed: false,
    createdAt: new Date('2024-03-23T20:00:00Z'),
    updatedAt: new Date('2024-03-23T20:35:00Z'),
  },
  {
    id: '10',
    todoListId: '1',
    title: 'Task 10: Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum risus vel lectus sodales vehicula.',
    priority: 2,
    completed: false,
    createdAt: new Date('2024-03-22T22:00:00Z'),
    updatedAt: new Date('2024-03-22T22:40:00Z'),
  },
  {
    id: '11',
    todoListId: '1',
    title: 'Task 11: Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum risus vel lectus sodales vehicula.',
    priority: 1,
    completed: false,
    createdAt: new Date('2024-03-21T08:00:00Z'),
    updatedAt: new Date('2024-03-21T08:45:00Z'),
  },
  {
    id: '12',
    todoListId: '1',
    title: 'Task 12: Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum risus vel lectus sodales vehicula.',
    priority: 1,
    completed: false,
    createdAt: new Date('2024-03-20T10:00:00Z'),
    updatedAt: new Date('2024-03-20T10:50:00Z'),
  },
  {
    id: '13',
    todoListId: '1',
    title: 'Task 13: Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum risus vel lectus sodales vehicula.',
    priority: 3,
    completed: false,
    createdAt: new Date('2024-03-19T12:00:00Z'),
    updatedAt: new Date('2024-03-19T12:55:00Z'),
  },
  {
    id: '14',
    todoListId: '1',
    title: 'Task 14: Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum risus vel lectus sodales vehicula.',
    priority: 3,
    completed: false,
    createdAt: new Date('2024-03-18T14:00:00Z'),
    updatedAt: new Date('2024-03-18T14:58:00Z'),
  },
  {
    id: '15',
    todoListId: '1',
    title: 'Task 15: Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum risus vel lectus sodales vehicula.',
    priority: 1,
    completed: false,
    createdAt: new Date('2024-03-17T16:00:00Z'),
    updatedAt: new Date('2024-03-17T16:30:00Z'),
  },
  {
    id: '16',
    todoListId: '1',
    title: 'Task 16: Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum risus vel lectus sodales vehicula.',
    priority: 2,
    completed: false,
    createdAt: new Date('2024-03-16T18:00:00Z'),
    updatedAt: new Date('2024-03-16T18:40:00Z'),
  },
  {
    id: '17',
    todoListId: '1',
    title: 'Task 17: Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum risus vel lectus sodales vehicula.',
    priority: 2,
    completed: false,
    createdAt: new Date('2024-03-15T20:00:00Z'),
    updatedAt: new Date('2024-03-15T20:45:00Z'),
  },
  {
    id: '18',
    todoListId: '1',
    title: 'Task 18: Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum risus vel lectus sodales vehicula.',
    priority: 1,
    completed: false,
    createdAt: new Date('2024-03-14T22:00:00Z'),
    updatedAt: new Date('2024-03-14T22:55:00Z'),
  },
  {
    id: '19',
    todoListId: '1',
    title: 'Task 19: Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum risus vel lectus sodales vehicula.',
    priority: 5,
    completed: false,
    createdAt: new Date('2024-03-13T08:00:00Z'),
    updatedAt: new Date('2024-03-13T08:30:00Z'),
  },
  {
    id: '20',
    todoListId: '1',
    title: 'Task 20: Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum risus vel lectus sodales vehicula.',
    priority: 5,
    completed: false,
    createdAt: new Date('2024-03-12T10:00:00Z'),
    updatedAt: new Date('2024-03-12T10:20:00Z'),
  },
];

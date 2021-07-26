import profileReducer, { profileActions } from "./profile-reducer";

let state = {
   posts: [
      { id: 1, message: "Hi", likesCount: 25 },
      { id: 2, message: "How are you?", likesCount: 2 },
      { id: 3, message: "Yo", likesCount: 1 },
   ],
   profile: null,
   status: "",
   newPostText: "",
};

it('length of post should be incremented (1)', () => {
   // 1.test data 
   let action = profileActions.addPostActionCreator('Hello');
   // 2. action
   let newState = profileReducer(state, action);

   // 3.expectation
   expect (newState.posts.length).toBe(4);
})

it('message of new post should be correct', () => {
   // 1.test data 
   let action = profileActions.addPostActionCreator('Hello');
   // 2. action
   let newState = profileReducer(state, action);

   // 3.expectation
   expect (newState.posts[3].message).toBe('Hello');
})

it('after deleting length of message should be decrement', () => {
   // 1.test data 
   let action = profileActions.deletePost(1);
   // 2. action
   let newState = profileReducer(state, action);

   // 3.expectation
   expect (newState.posts.length).toBe(2);
})

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
   // 1.test data 
   let action = profileActions.deletePost(1000);
   // 2. action
   let newState = profileReducer(state, action);

   // 3.expectation
   expect (newState.posts.length).toBe(3);
})



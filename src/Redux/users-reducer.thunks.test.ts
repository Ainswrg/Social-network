import {usersActions, follow, unfollow} from './users-reducer'
import {usersAPI} from '../api/users-api'
import {APIResponseType, ResultCodeEnum} from '../api/api'

jest.mock('../api/users-api')
const userAPIMock = usersAPI as jest.Mocked<typeof usersAPI>;

const dispatchMock = jest.fn();
const getStateMock = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
  // dispatchMock.mockClear();
  // getStateMock.mockClear();
  // userAPIMock.follow.mockClear();
  // userAPIMock.unfollow.mockClear();
})


const result: APIResponseType = {
  resultCode: ResultCodeEnum.Success,
  messages: [],
  data: {}
}

// userAPIMock.follow.mockReturnValue(Promise.resolve(result));
// userAPIMock.unfollow.mockReturnValue(Promise.resolve(result));




test('success follow thunk', async () => {
  const thunk = follow(1)
  userAPIMock.follow.mockResolvedValue(Promise.resolve(result));
  
  await thunk(dispatchMock, getStateMock, {})

  expect(dispatchMock).toBeCalledTimes(3)
  expect(dispatchMock).toHaveBeenNthCalledWith(1, usersActions.toggleFollowingInProgress(true, 1))
  expect(dispatchMock).toHaveBeenNthCalledWith(2, usersActions.followSuccess(1))
  expect(dispatchMock).toHaveBeenNthCalledWith(3, usersActions.toggleFollowingInProgress(false, 1))
})

test('success unfollow thunk', async () => {
  const thunk = unfollow(1)
  userAPIMock.unfollow.mockReturnValue(Promise.resolve(result));
  
  await thunk(dispatchMock, getStateMock, {})
  
  expect(dispatchMock).toBeCalledTimes(3)
  expect(dispatchMock).toHaveBeenNthCalledWith(1, usersActions.toggleFollowingInProgress(true, 1))
  expect(dispatchMock).toHaveBeenNthCalledWith(2, usersActions.unfollowSuccess(1))
  expect(dispatchMock).toHaveBeenNthCalledWith(3, usersActions.toggleFollowingInProgress(false, 1))
})
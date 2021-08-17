import { all, put, select, takeLatest, call } from 'redux-saga/effects';
import { isEmpty } from 'lodash';

import { reportError } from '../../shared/utils/reportError';
import { auth, reduxSagaFirebase } from '../../config/firebase';
import * as plantsActions from './plants.actions';
import { selectPlants } from './plants.selectors';

function* fetchPlants() {
  try {
    // @ts-ignore
    const snapshot = yield call(reduxSagaFirebase.firestore.getCollection, 'users');
    let users: any;
    snapshot.forEach((user: { id: any; data: () => any }) => {
      users = {
        ...users,
        [user.id]: user.data(),
      };
    });
    const currentUser = users[auth.currentUser?.uid || ''];
    const usersPlants = currentUser?.plants;

    yield put(plantsActions.fetchPlantsSuccess(usersPlants));
  } catch (error) {
    reportError(error);
    yield put(plantsActions.fetchPlantsFailure(error));
  }
}

function* savePlants() {
  console.log('in save saga');
  // @ts-ignore
  const plants = yield select(selectPlants);
  console.log(plants);
  console.log(`users/${auth.currentUser?.uid}`);
  yield call(reduxSagaFirebase.firestore.setDocument, `users/${auth.currentUser?.uid}`, { plants });
}

export function* watchPlants() {
  yield all([
    takeLatest(plantsActions.fetchPlants, fetchPlants),
    takeLatest(plantsActions.addPlant, savePlants),
    takeLatest(plantsActions.editPlant, savePlants),
    takeLatest(plantsActions.deletePlant, savePlants),
  ]);
}

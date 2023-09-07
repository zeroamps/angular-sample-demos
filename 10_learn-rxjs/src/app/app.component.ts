import { Component, OnInit } from '@angular/core';

import * as rxjs_common from './tests/rxjs-common';
import * as rxjs_schedulers from './tests/rxjs-schedulers';
import * as rxjs_creation_operators from './tests/rxjs-creation-operators';
import * as rxjs_join_creation_operators from './tests/rxjs-join-creation-operators';
import * as rxjs_filtering_operators from './tests/rxjs-filtering-operators';
import * as rxjs_join_operators from './tests/rxjs-join-operators';
import * as rxjs_multicasting_operators from './tests/rxjs-multicasting-operators';
import * as rxjs_error_handling_operators from './tests/rxjs-error-handling-operators';
import * as rxjs_utility_operators from './tests/rxjs-utility-operators';
import * as rxjs_conditional_operators from './tests/rxjs-conditional-operators';
import * as rxjs_mathematical_operators from './tests/rxjs-mathematical-operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // rxjs_common.test_observable();
    // rxjs_common.test_observer();
    // rxjs_common.test_subscription();
    // rxjs_common.test_subscriptionMulticast();
    // rxjs_common.test_subject();
    // rxjs_common.test_subjectLikeObserver();
    // rxjs_common.test_behaviorSubject();
    // rxjs_common.test_replaySubject();
    // rxjs_common.test_asyncSubject();
    // rxjs_common.test_voidSubject();

    // rxjs_schedulers.test_schedulers_observeOn();
    // rxjs_schedulers.test_schedulers_subscribeOn();
    // rxjs_schedulers.test_schedulers_brainfuck();

    // rxjs_creation_operators.test_ajax();
    // rxjs_creation_operators.test_bindCallback();
    // rxjs_creation_operators.test_bindNodeCallback();
    // rxjs_creation_operators.test_defer();
    // rxjs_creation_operators.test_from();
    // rxjs_creation_operators.test_fromEvent();
    // rxjs_creation_operators.test_fromEventPattern();
    // rxjs_creation_operators.test_generate();
    // rxjs_creation_operators.test_interval();
    // rxjs_creation_operators.test_of();
    // rxjs_creation_operators.test_range();
    // rxjs_creation_operators.test_throwError();
    // rxjs_creation_operators.test_timer();
    // rxjs_creation_operators.test_iif();

    // rxjs_join_creation_operators.test_combineLatest();
    // rxjs_join_creation_operators.test_concat();
    // rxjs_join_creation_operators.test_forkJoin();
    // rxjs_join_creation_operators.test_merge();
    // rxjs_join_creation_operators.test_partition();
    // rxjs_join_creation_operators.test_race();
    // rxjs_join_creation_operators.test_zip();

    // rxjs_filtering_operators.test_audit();
    // rxjs_filtering_operators.test_auditTime();
    // rxjs_filtering_operators.test_debounce();
    // rxjs_filtering_operators.test_debounceTime();
    // rxjs_filtering_operators.test_distinct();
    // rxjs_filtering_operators.test_distinctUntilChanged();
    // rxjs_filtering_operators.test_distinctUntilKeyChanged();
    // rxjs_filtering_operators.test_elementAt();
    // rxjs_filtering_operators.test_filter();
    // rxjs_filtering_operators.test_first();
    // rxjs_filtering_operators.test_ignoreElements();
    // rxjs_filtering_operators.test_last();
    // rxjs_filtering_operators.test_sample();
    // rxjs_filtering_operators.test_sampleTime();
    // rxjs_filtering_operators.test_single();
    // rxjs_filtering_operators.test_skip();
    // rxjs_filtering_operators.test_skipLast();
    // rxjs_filtering_operators.test_skipUntil();
    // rxjs_filtering_operators.test_skipWhile();
    // rxjs_filtering_operators.test_take();
    rxjs_filtering_operators.test_takeLast();
    // rxjs_filtering_operators.test_takeUntil();
    // rxjs_filtering_operators.test_takeWhile();
    // rxjs_filtering_operators.test_throttle();
    // rxjs_filtering_operators.test_throttleTime();

    // rxjs_join_operators.test_combineLatestAll();
    // rxjs_join_operators.test_concatAll();
    // rxjs_join_operators.test_exhaustAll();
    // rxjs_join_operators.test_mergeAll();
    // rxjs_join_operators.test_switchAll();
    // rxjs_join_operators.test_withLatestFrom();

    // rxjs_multicasting_operators.test_share();

    // rxjs_error_handling_operators.test_catchError();
    // rxjs_error_handling_operators.test_retry();

    // rxjs_utility_operators.test_tap();
    // rxjs_utility_operators.test_delay();
    // rxjs_utility_operators.test_delayWhen();
    // rxjs_utility_operators.test_timeInterval();
    // rxjs_utility_operators.test_timeout();
    // rxjs_utility_operators.test_toArray();

    // rxjs_conditional_operators.test_defaultIfEmpty();
    // rxjs_conditional_operators.test_every();
    // rxjs_conditional_operators.test_find();
    // rxjs_conditional_operators.test_findIndex();
    // rxjs_conditional_operators.test_isEmpty();

    // rxjs_mathematical_operators.test_count();
    // rxjs_mathematical_operators.test_min();
    // rxjs_mathematical_operators.test_max();
    // rxjs_mathematical_operators.test_reduce();
  }
}

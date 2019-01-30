import { expectType } from 'tsd-check';
import { bestFacebookLocaleFor } from '.';

expectType<string>(bestFacebookLocaleFor('en_US'));

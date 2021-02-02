import { RegistryTypes, OverrideModuleType } from '@polkadot/types/types';
import * as bifrostDefinitions from '../interfaces/definitions';

const bifrostTypes = Object
  .values(bifrostDefinitions)
  .reduce((res, { types }) => ({ ...res, ...types }), {});

const types: RegistryTypes = {
  ...bifrostTypes,
  // aliases that don't do well as part of interfaces
  'voting::VoteType': 'VoteType',
  'voting::TallyType': 'TallyType',
  'voting::Tally': 'VotingTally',
  'Address': 'MultiAddress',
  'LookupSource': 'MultiAddress',
};

const typesAlias: Record<string, OverrideModuleType> = {
  voting: { Tally: 'VotingTally' },
}

export default {
  types, typesAlias
};


export default {
    types: {
        AssetConfig: { redeem_duration: 'BlockNumber', min_reward_per_block: 'Balance' },
        ProxyValidatorRegister: {
            last_block: 'BlockNumber',
            deposit: 'Balance',
            need: 'Balance',
            staking: 'Balance',
            reward_per_block: 'Balance',
            validator_address: 'Vec<u8>'
          }, 
    }
  };
  
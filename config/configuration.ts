/** Configuration object used for automatic modyfing of `Anchor.toml` */
type ConfigurationObject = {
  /** Network where contract should be deployed. */
  network: "localnet" | "devnet" | "testnet" | "mainnet";
  features: {
    seeds: boolean;
  };
};

export default {};

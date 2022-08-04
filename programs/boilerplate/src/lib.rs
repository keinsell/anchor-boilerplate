use anchor_lang::prelude::*;

// Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS
declare_id!("81zdKR7F44enFpsqygUKuTbaF4mvGrJe798k1fAB1qog");

#[program]
mod boilerplate {
    use super::*;
    pub fn initialize(_ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}

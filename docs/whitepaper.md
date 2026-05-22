# SPCX Parody Whitepaper 🚀

> *A document that takes itself seriously enough to be honest, and not seriously enough to be dangerous.*

---

## 0. Abstract

SPCX is a meme token on the Solana blockchain. It exists as a joke about reusable-rocket aesthetics, billionaire fortunes that supposedly "would make everyone rich if shared", and the math that nobody bothers to check.

It is not a security. It is not an investment vehicle. It is not affiliated with any real aerospace company. It is a meme, and it behaves like a meme.

If you are looking for a serious DeFi whitepaper full of fee curves, governance forks, and tokenomics models with Greek letters — you are in the wrong document.

---

## 1. Origin of the meme

There is a classic joke that circulates whenever a billionaire's net worth makes the news:

> *"If [Person X] divided his fortune among the entire human population, every single one of us would be a millionaire."*

The arithmetic is, of course, completely wrong. If the richest person on Earth handed out his entire net worth evenly to the roughly 8 billion humans alive, each person would receive somewhere between **30 and 60 euros**. Not millions. Not even thousands. Not enough for a decent dinner with drinks.

But the joke keeps circulating, because it is a beautifully optimistic mistake, and because *we want it to be true*.

**SPCX is built around that exact mistake.**

We minted a supply of **1,000,000,000 SPCX**. With a world population around 8 billion, simple division gives:

> 1,000,000,000 ÷ 8,000,000,000 = **0.125 SPCX per person**

But the meme version, the one that circulates on social media, the one your uncle posts on Facebook, says:

> *"There are a billion SPCX. If we shared them out, everyone would get a thousand!"*

That's wrong by a factor of roughly 8,000. **That is the joke.** SPCX is a monument to math we wish were true.

---

## 2. Aesthetic inspiration

SPCX is themed around the imagery of:

- Reusable rockets returning to land vertically
- Mission patches with confident slogans
- The phrase "to Mars" used as filler
- A certain South African-Canadian-American entrepreneur whose name we will not write down here
- A certain rocket company that *might* be going public on the stock market soon — we have no further comment on which one

The branding does **not** use any real logo, real name, or real visual identity from any real company.

### 2.1 About the logo

The official SPCX logo is a **completely black square**.

This is **not** a missing-image error. This is **not** a broken asset. This is **not** a placeholder waiting to be replaced.

The logo **is** the black square. We refuse to confirm or deny what is in it. Officially, the SPCX logo is the **deep space** — the cold, dark, mostly empty cosmic vacuum where reusable rockets do their work. Yes, the rocket is in there. You simply cannot see it. Because it is far away. Because it is dark. Because it is space.

Anyone who claims they can see the rocket in the SPCX logo is either lying, or has a much better monitor than the rest of us. Either way, congratulations.

---

## 3. Tokenomics

This section is the only one in the document that is 100 % serious. Everything below is verifiable on-chain.

### 3.1 Supply

| | |
|---|---|
| Total supply | 1,000,000,000 SPCX |
| Decimals | 6 |
| Standard | SPL Token (classic, not Token-2022) |
| Mint authority | **Revoked** — minting more is impossible |
| Freeze authority | **Never assigned** — accounts cannot be frozen |

### 3.2 Initial distribution

| Bucket | Amount | % of supply | Status |
|---|---|---|---|
| Raydium liquidity pool (paired with 1 SOL) | 950,000,000 SPCX | 95 % | Live |
| Creator wallet (reserve for airdrops / tips) | 50,000,000 SPCX | 5 % | Held |
| Pre-sale | 0 | 0 % | None — there was no pre-sale |
| Team allocation | 0 | 0 % | None — there is no team |
| Marketing fund | 0 | 0 % | None |
| Vesting | 0 | 0 % | None |

### 3.3 Liquidity pool

- **Venue:** Raydium CPMM (constant product market maker)
- **Pair:** SPCX / SOL
- **Fee tier:** 0.25 %
- **Pool ID:** `7HMc74z4wX24Yg2dHYXj7NawmFQoQ1kzqYSBi9oaS4RM`
- **LP tokens:** held by the creator wallet, **currently not burned**

> ⚠️ **About the LP tokens:** as long as they are not burned, the creator technically has the ability to remove liquidity from the pool. This is a known characteristic of every non-locked liquidity setup. The creator has no intention of removing the liquidity, but intention is not on-chain — only burning the LP tokens makes it cryptographically impossible. See the [disclaimer](disclaimer.md#liquidity-risk) for the honest version.

### 3.4 Authorities — current state

| Authority | Address | What it controls |
|---|---|---|
| Mint authority | `(none)` — revoked | Creating new tokens. Impossible now. |
| Freeze authority | `(none)` — never set | Freezing user accounts. Impossible. |
| Metaplex update authority | Creator wallet | Editing token name / symbol / metadata URI |
| `isMutable` (Metaplex) | `true` | Whether the metadata can be edited at all |

### 3.5 What could still change (and what cannot)

| Action | Possible? | Note |
|---|---|---|
| Mint more SPCX | ❌ No | Authority revoked |
| Freeze a holder's account | ❌ No | Authority never assigned |
| Change the token name / symbol | ✅ Yes | Until update authority is revoked or `isMutable=false` |
| Add a logo URI to metadata | ✅ Yes | Planned |
| Remove liquidity from the pool | ⚠️ Yes, by the LP holder | Until LP tokens are burned |
| Burn LP tokens (lock liquidity) | ✅ Possible, **irreversible** | Under consideration |

---

## 4. What SPCX is NOT

This list is here so there is no ambiguity:

- **Not an investment.** Buying SPCX is not investing. There is no business, no revenue, no product, no roadmap to monetization.
- **Not a security.** No expectation of profit from the efforts of others is being marketed.
- **Not affiliated** with SpaceX, Tesla, X.com, Twitter, Elon Musk, or any of his companies, persons, projects, or pets.
- **Not endorsed** by any government, regulator, exchange, or influencer.
- **Not audited.** The Solana SPL Token program itself is audited; our specific deployment is not, because there is nothing custom to audit — it is a vanilla SPL token.
- **Not utility-bearing.** SPCX does not grant access to anything, vote in anything, stake into anything, or unlock anything.
- **Not a stable coin.** Price is whatever the AMM curve says it is, moment to moment.

---

## 5. Roadmap (self-parodic)

| Phase | When | Deliverable |
|---|---|---|
| Phase 1 — Launch | Done (2026-05-19) | Token live, pool live, no one notices |
| Phase 2 — Discoverability | In progress | Metadata logo, website, disclaimer, this document |
| Phase 3 — Community | Optional | If someone shows up, give them tokens for the laugh |
| Phase 4 — "To the Moon" | Never | The Moon is not actually on the roadmap |
| Phase 5 — "To Mars" | Never | Mars is even less on the roadmap |
| Phase 6 — Exit liquidity | Never | If this happens it stops being a meme and starts being a problem |

---

## 6. FAQ

**Q: Should I buy SPCX?**
A: Probably not. If you want to throw a few cents at a meme for the joke, that is fine. If you are looking at it as an investment, please re-read the disclaimer.

**Q: Will the price go up?**
A: It might. It might not. It might do both in the same hour. This is the nature of a low-liquidity meme token.

**Q: Why is the meme math wrong on purpose?**
A: Because that is the joke. The bad math is the entire point.

**Q: Are you going to do an airdrop?**
A: Possibly small ones to Solana users who interact with the project. There is no claim form, no Discord whitelist, no presale, no early-investor list. If it happens it will be quiet and small.

**Q: Will you burn the LP tokens?**
A: It is under consideration. Burning makes the liquidity permanent and removes the rug-pull risk, but it is also irreversible. If you are about to buy and that decision matters to you, check the current state on-chain before buying.

**Q: Is this legal?**
A: Issuing a meme token on a public blockchain is broadly legal in many jurisdictions, but **regulations differ wildly by country**. SPCX is not offered as an investment in any jurisdiction. You are responsible for understanding the rules where you live.

**Q: Who is behind this?**
A: A developer doing a personal side project. Not a company. Not a fund. Not a foundation. Just a person.

**Q: Can I fork the meme?**
A: The code is MIT. The meme is yours. Just don't claim affiliation with the original.

---

## 7. Closing thought

If a meme token can make someone smile at the absurdity of "let's just divide the billionaire's fortune among everyone" — and along the way nobody loses money they cannot afford to lose — then it has done its job.

The bad math is the feature, not the bug.

🚀

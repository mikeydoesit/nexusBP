<script>
    import { fade } from 'svelte/transition';
</script>

<style>
    .drivers_contract_wrapper img {
        @apply mb-8;
    }
    .drivers_contract_wrapper img:last-of-type {
        @apply mb-0;
    }
</style>

<div class="drivers_contract_wrapper" in:fade>
    <img src="/images/driversContractP1.png" alt="contract page 1" />
    <img src="/images/driversContractP2.png" alt="contract page 2" />
    <img src="/images/driversContractP3.png" alt="contract page 3" />
</div>
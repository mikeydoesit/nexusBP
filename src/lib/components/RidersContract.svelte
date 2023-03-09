<script>
    import { fade } from 'svelte/transition';
</script>

<style>
    .riders_contract_wrapper img:first-of-type{
        @apply mb-8;
    }
</style>

<div class="riders_contract_wrapper" in:fade>
    <img src="/images/ridersContractP1.png" alt="contract page 1" />
    <img src="/images/ridersContractP2.png" alt="contract page 2" />
</div>
/**
 * This script starts a local registry for e2e testing purposes.
 * It is meant to be called in jest's globalSetup.
 */
import { startLocalRegistry } from '@nx/js/plugins/jest/local-registry';
import { releasePublish, releaseVersion } from 'nx/release';

export default async () => {
  // local registry target to run
  const localRegistryTarget = '@nx-dotnet/source:local-registry';
  // storage folder for the local registry
  const storage = './tmp/local-registry/storage';

  (global as any).stopLocalRegistry = await startLocalRegistry({
    localRegistryTarget,
    storage,
    verbose: process.env.NX_VERBOSE_LOGGING === 'true',
  });

  await releaseVersion({
    specifier: '0.0.0-e2e',
    stageChanges: false,
    gitCommit: false,
    gitTag: false,
    firstRelease: true,
    generatorOptionsOverrides: {
      skipLockFileUpdate: true,
      currentVersionResolver: 'registry',
    },
  });
  await releasePublish({
    tag: 'e2e',
    firstRelease: true,
  });
};

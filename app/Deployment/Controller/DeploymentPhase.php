<?php

namespace App\Deployment\Controller;

enum DeploymentPhase: string
{
    case Preflight = 'preflight';
    case Foundation = 'foundation';
    case Secrets = 'secrets';
    case Runtime = 'runtime';
    case Deploy = 'deploy';
    case PreCommission = 'pre-commission';
    case Commission = 'commission';
    case Domain = 'domain';
    case Verify = 'verify';
}
